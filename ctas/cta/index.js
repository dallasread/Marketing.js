var Generator = require('generate-js'),
    Interactions = require('interactions'),
    emitter = require('events').EventEmitter,
    createCTA = require('./proto/create-cta');

function $find(domOrString) {
    if (typeof domOrString !== 'string') return domOrString;
    if (domOrString === 'body') return document.body;
    return document.querySelector(domOrString);
}

var CTA = Generator.generateFrom(emitter, function CTA(options) {
    var _ = this;

    if (typeof options !== 'object')                 options = {};
    if (typeof options.data !== 'object')            options.data = {};
    if (typeof options.data.visibility !== 'object') options.data.visibility = {};

    _.defineProperties({
        element: options.element || document.createElement('div'),
        target: options.target,
        data: options.data
    });

    new Interactions({
        thisArg: _,
        emitter: _.dom.rootNode,
        interactions: _.generator.interactions
    });

    _.registerSchedules(_.data.schedules);
    _.registerTriggers(_.data.triggers);
    _.registerURLs(_.data.visibility.show, _.data.visibility.show);
});

CTA.createCTA = createCTA;

CTA.definePrototype({
    registerSchedules: function registerSchedules() {
        var _ = this;


    },

    registerTriggers: function registerTriggers() {
        var _ = this;


    },

    registerURLs: function registerURLs() {
        var _ = this;


    }
});

CTA.definePrototype({
    ready: function ready() {
        var _ = this;
        // if things are cool...
        _.append();
        _.emit('ready');
        return _;
    },

    append: function append() {
        var _ = this,
            $element = $find(_.element),
            $target = $find(typeof _.target === 'object' ? _.target.element : _.target || 'body'),
            method = typeof _.target === 'object' && _.target.method;

        if (method === 'replaceWith') {
            $target.parentNode.replaceChild($element, $target);
        } else if (method === 'append') {
            $target.appendChild($element);
        } else if ($target && $element) {
            $target.innerHTML = '';
            $target.appendChild($element);
        }

        if ($element) {
            $element.appendChild(_.dom.rootNode);
        }
    },

    render: function render(data) {
        var _ = this;
        _.dom.update(data || _.data);
    },
});

module.exports = CTA;
