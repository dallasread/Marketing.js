var Store = require('../../../remetric-admin/utils/store'),
    createCTA = require('./proto/create-cta');

var CTA = Store.generate(function CTA(options) {
    var _ = this;

    if (typeof options !== 'object')      return console.warn('`CTA.options` must be an object.');
    if (typeof options.$ === 'undefined') return console.warn('`CTA.$` is required.');

    Store.call(_, options.data);

    delete options.data;

    _.defineProperties({
        dom: _.bars.build(_.bars.preCompile(options.template || _.template, 'index', null, {
            minify: true
        }), {})
    });

    options.$el = options.$(_.dom.rootNode);

    _.defineProperties(options);

    _.registerSchedules(_.get('schedules'));
    _.registerTriggers(_.get('triggers'));
    _.registerURLs(_.get('visibility.show'), _.get('visibility.hide'));
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
        $el.on('click', function() {
            console.log('click');
        });
    }
});

CTA.definePrototype({
    ready: function ready() {
        var _ = this;
        // if schedules, urls, & triggers are cool...
        _.append();
        _.emit('ready');
        return _;
    },

    append: function append() {
        var _ = this,
            $target = _.$(typeof _.target === 'object' ? _.target.element : _.target || 'body'),
            method = typeof _.target === 'object' && _.target.method;

        _.$el.append(_.dom.rootNode);

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

module.exports = CTA;
