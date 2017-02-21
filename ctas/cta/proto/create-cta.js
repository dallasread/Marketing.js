var Bars = require('bars'),
    registerBars = require('./register-bars');

module.exports = function createCTA(config, constructor) {
    var _ = this,
        bars = new Bars(),
        el = _.generate(constructor);

    el.createCTA = createCTA;
    el.registerBars = registerBars(bars);
    el.registerBars(config);

    return el;
};
