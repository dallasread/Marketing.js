/*
    An event that fires upon a specific UI or CTA condition
*/

var Generator = require('generate-js');

var Trigger = Generator.generate(function Trigger(options) {
    var _ = this;

    if (typeof options.cta !== 'object') throw new Error('`options.cta` is required.');

    options.event           = options.event      || 'ready';
    options.action          = options.action     || 'show';

    options.visibility      = options.visibility || {};
    options.data            = options.data       || {};

    options.wait            = parseInt(options.wait)   || 0;
    options.scroll          = options.scroll || 0;
    options.offset          = parseInt(options.offset || options.cta.offset) || new Date().getTimezoneOffset();

    if (typeof options.onceler === 'undefined') options.onceler = ['ready', 'exit', 'scroll'].indexOf(options.event) !== -1;

    _.defineProperties(options);

    if (_.cta.isVisibleForURL(_.visibility.show, _.visibility.hide)) {
        _.bind();
    }
});

function defaultFunc() {
    var _ = this;

    if (typeof _.action === 'function') {
        _.action(_);
    } else if (typeof Trigger.ACTIONS[_.action] === 'function') {
        Trigger.ACTIONS[_.action].apply(_);
    } else {
        _.cta[_.action](_);
    }
}

Trigger.definePrototype({
    bind: function bind() {
        var _ = this,
            func = Trigger.EVENTS[_.event];

        if (typeof func === 'function') {
            func.apply(_);
        } else if (_.target) {
            _.bindBasicEvent();
        } else {
            _.bindCTAEvent();
        }
    },

    bindCTAEvent: function bindCTAEvent() {
        var _ = this;

        _.cta.on(_.event, function basicEvent() {
            _.trigger();
        });
    },

    bindBasicEvent: function bindBasicEvent() {
        var _ = this;

        _.$(document).on(_.event, _.target, function bindBasicEvent() {
            _.trigger();
            return false;
        });
    },

    trigger: function trigger(func) {
        var _ = this;

        if (_.onceler && _.triggered) return;

        _.defineProperties({ triggered: true });

        setTimeout(function() {
            (func || defaultFunc).call(_);
        }, _.wait);
    }
});

Trigger.EVENTS = {};

Trigger.registerEvent = function registerEvent(name, func) {
    this.EVENTS[name] = func;
};

Trigger.ACTIONS = {};

Trigger.registerAction = function registerAction(name, func) {
    this.ACTIONS[name] = func;
};

module.exports = Trigger;
