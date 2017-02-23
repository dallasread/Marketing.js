/*
    A Base CTA to inherit from
*/

var Store = require('../../../remetric-admin/utils/store'),
    Trigger = require('./lib/trigger'),
    createCTA = require('./proto/create-cta');

var CTA = Store.generate(function CTA(options) {
    var _ = this;

    if (typeof options !== 'object')      return console.warn('`CTA.options` must be an object.');
    if (typeof options.$ === 'undefined') return console.warn('`CTA.$` is required.');

    Store.call(_, options.data);

    _.defineProperties({
        dom: _.bars.build(_.bars.preCompile(options.template || _.template, 'index', null, {
            minify: true
        }), _._data)
    });

    delete options.data;

    options.$el = options.$(_.dom.rootNode);

    _.defineProperties(options);

    _.registerEvents(_.$el);

    _.on('update', function() {
        _.dom.update(_._data);
    });
});

CTA.createCTA = createCTA;
CTA.definePrototype(require('./lib/transitions'));

CTA.definePrototype({
    ready: function ready() {
        var _ = this,
            triggers = _.get('cta.data.triggers'),
            id = 'cta-' + (_.get('cta.id') || Date.now());

        if (!_.isVisibleForURL(_.get('cta.visibility.show'), _.get('cta.visibility.hide'))) return console.warn('CTA outside of URL.');

        _.$el.attr('id', id);
        _.$el.addClass(('cta cta-' + _.get('cta.data.type') + ' cta-position-' + _.get('cta.data.position')).toLowerCase());

        if (_.get('cta.data.colours.primary')) {
            _.$('<style type="text/css">\
                #' + id + ' .primary-bg {\
                    background: ' + _.get('cta.data.colours.primary') + '\
                }\
            </style>').appendTo('body');
        }

        for (var key in (triggers || {})) {
            _.registerTrigger( triggers[key] );
        }

        _.dom.update(_._data);
        _.append();
        _.emit('ready');

        return _;
    },

    registerTrigger: function registerTrigger(trigger) {
        var _ = this;

        trigger.$ = _.$;
        trigger.cta = _;

        return new Trigger( trigger );
    },

    registerEvents: function registerEvents($el) {
        var _ = this;

        $el.on('click', '[data-go]', function() {
            _.set('currentPath', this.dataset.go);
            return false;
        });
    },

    append: function append() {
        var _ = this,
            $target = _.$(typeof _.target === 'object' ? _.target.element : _.target || 'body'),
            method = typeof _.target === 'object' && _.target.method;

        _.$el.hide();

        if (method === 'replaceWith') {
            $target.replaceWith(_.$el);
        } else if (method === 'append') {
            $target.replaceWith(_.$el);
        } else if (method === 'html') {
            $target.html(_.$el);
        } else {
            _.$el.appendTo($target);
        }
    }
});

CTA.definePrototype({
    showBySchedule: require('./lib/show-by-schedule'),
    isVisibleForURL: require('./lib/is-visible-for-url')
});

require('./lib/triggers');

module.exports = CTA;
