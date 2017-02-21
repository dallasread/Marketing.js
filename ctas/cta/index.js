var Store = require('../../../remetric-admin/utils/store'),
    createCTA = require('./proto/create-cta');

function objectValues(obj) {
    return Object.keys(obj).map(function(i) {
        return obj[i];
    });
}

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

CTA.definePrototype({
    registerSchedules: function registerSchedules(schedules) { },

    registerTriggers: function registerTriggers(triggers) { },

    registerURLs: function registerURLs(show, hide) { },

    registerEvents: function registerEvents($el) {
        var _ = this;

        $el.on('click', '[data-go]', function() {
            _.set('currentPath', this.dataset.go);
            return false;
        });
    }
});

CTA.definePrototype({
    showByURL: function showByURL() {

    }
});

CTA.definePrototype({
    ready: function ready() {
        var _ = this,
            id = 'cta-' + (_.get('cta.id') || Date.now());

        if (!_.isVisibleForURL(_.get('cta.visibility.show'), _.get('cta.visibility.hide'))) return console.warn('CTA outside of URL.');

        _.$el.attr('id', id);
        _.$el.addClass('cta cta-' + _.constructor.name.toLowerCase());
        _.$el.addClass('cta cta-position-' + _.get('cta.data.position'));

        if (_.get('cta.data.colours.primary')) {
            _.$('<style type="text/css">\
                #' + id + ' .primary-bg {\
                    background: ' + _.get('cta.data.colours.primary') + '\
                }\
            </style>').appendTo('body');
        }

        // for (var key in (cta.data.triggers || {})) {
        //     _.registerTrigger( cta.data.triggers[key] )
        // }

        _.dom.update(_._data);
        _.append();
        _.emit('ready');
        return _;
    },

    append: function append(transition) {
        var _ = this,
            $target = _.$(typeof _.target === 'object' ? _.target.element : _.target || 'body'),
            method = typeof _.target === 'object' && _.target.method;

        if (method === 'replaceWith') {
            $target.replaceWith(_.$el);
        } else if (method === 'append') {
            $target.replaceWith(_.$el);
        } else if (method === 'html') {
            $target.html(_.$el);
        } else {
            _.$el.appendTo($target);
        }
    },

    isVisibleForURL: function isVisibleForURL(show, hide) {
        var url = window.location.href,
            path;

        if (!(show instanceof Array)) show = objectValues(show || { 0: '*' });
        if (!(hide instanceof Array)) hide = objectValues(hide || {});

        if (typeof show === 'string') show = show.replace(/\s+/, '').split(',');
        if (typeof hide === 'string') hide = hide.replace(/\s+/, '').split(',');

        for (var i = hide.length - 1; i >= 0; i--) {
            path = hide[i];

            if (typeof path === 'string') path = new RegExp('^' + path.replace(/\*/g, '(.*?)') + '$');

            if (path.test(url)) {
                return false;
            }
        }

        for (i = show.length - 1; i >= 0; i--) {
            path = show[i];

            if (typeof path === 'string') path = new RegExp('^' + path.replace(/\*/g, '(.*?)') + '$');

            if (path.test(url)) {
                return true;
            }
        }

        return false;
    }
});

module.exports = CTA;
