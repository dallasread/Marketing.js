var Bars = require('bars'),
    registerBars = require('./register-bars'),
    registerInteractions = require('./register-interactions');

module.exports = function createCTA(config, constructor) {
    var _ = this,
        bars = new Bars(),
        el = _.generate(constructor);

    el.createCTA = createCTA;
    el.registerBars = registerBars(bars);
    el.registerInteractions = registerInteractions;

    el.registerBars(config);
    el.registerInteractions(_, config);

    return el;
};
