/*
    A Base CTA to inherit from
*/

var CustomElement = require('generate-js-custom-element'),
    Trigger = require('./lib/trigger'),
    LazyLoader = require('./lib/lazy-loader'),
    lazyLoader = new LazyLoader(),
    formSerialize = require('form-serialize'),
    loadExternal = require('load-external'),
    deepExtend = require('deep-extend'),
    async = require('no-async'),
    jQuery = require('jquery').noConflict();

var CTA = CustomElement.createElement({}, function CTA(options) {
    var _ = this;

    if (typeof options !== 'object') return console.warn('`CTA.options` must be an object.');

    options.$ = jQuery;

    CustomElement.call(_, {
        data: options,
        template: options.template
    });

    options.$el = options.$(_.element);

    _.defineProperties(options);
    _.registerEvents(_.$el);
});

CTA.definePrototype(require('./lib/transitions'));

CTA.definePrototype({
    ready: function ready() {
        var _ = this,
            triggers = _.get('cta.triggers', { ready: { event: 'ready', action: 'show' } }),
            id = 'cta-' + (_.cta.id || Date.now()),
            klass = 'cta ';

        if (!_.isVisibleForURL(_.get('cta.visibility.show'), _.get('cta.visibility.hide'))) {
            if (_.debug) console.warn('CTA outside of URL.');
            return;
        }

        klass += ' cta-type-' + _.type;
        klass += ' cta-style-' + (_.cta.style || 'default');
        klass += ' cta-position-' + (_.cta.position || 'default');

        if (_.cta.class) klass += ' ' + _.cta.class;

        _.$el.attr('id', id);
        _.$el.addClass(klass);

        if (_.get('cta.colours.primary')) {
            _.$('<style type="text/css">\
                #' + id + ' .primary-bg {\
                    background: ' + _.get('cta.colours.primary') + '\
                }\
                #' + id + ' .secondary-bg {\
                    background: ' + _.get('cta.colours.secondary') + '\
                }\
                #' + id + ' .primary {\
                    color: ' + _.get('cta.colours.primary') + '\
                }\
                #' + id + ' .secondary {\
                    background: ' + _.get('cta.colours.secondary') + '\
                }\
            </style>').appendTo('body');
        }

        for (var key in (triggers || {})) {
            _.registerTrigger( triggers[key] );
        }

        async.series([
            function registerLoader(done) {
                if (typeof _.get('stylesheet') === 'undefined') return done();

                lazyLoader.register(_.get('stylesheet'), function(next) {
                    loadExternal(_.get('stylesheet'), next);
                });

                done();
            },
            function loadStyles(done) {
                if (typeof _.get('stylesheet') === 'undefined') return done();
                lazyLoader.load(_.get('stylesheet'), done);
            }
        ], function() {
            _.append();
            _.emit('ready');
        });

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
            $target = _.$(_.get('cta.target.element') || 'body'),
            method = _.get('cta.target.method');

        _.$el.hide();

        if (method === 'replaceWith') {
            $target.replaceWith(_.$el);
        } else if (method === 'append') {
            $target.append(_.$el);
        } else if (method === 'prependTo') {
            _.$el.prependTo($target);
        } else if (method === 'html') {
            $target.html(_.$el);
        } else {
            _.$el.appendTo($target);
        }
    }
});

CTA.definePrototype({
    isVisibleForURL: require('./lib/is-visible-for-url'),
    showBySchedule: require('./lib/show-by-schedule'),
    serializeForm: function serializeForm(form) {
        return formSerialize(
            form,
            { hash: true }
        );
    },
    merge: deepExtend
});

require('./lib/triggers');

module.exports = CTA;
