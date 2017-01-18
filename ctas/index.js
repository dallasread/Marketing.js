var Generator = require('generate-js');

var CTAs = Generator.generate(function CTAs() {});

CTAs.definePrototype({
    CTA: require('./cta'),
    Chat: require('./chat'),
    Wizard: require('./wizard')
});

module.exports = CTAs;
