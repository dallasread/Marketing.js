/*
    The Available CTAs
*/

var Generator = require('generate-js');

var CTAs = Generator.generate(function CTAs() { });

CTAs.definePrototype({
    Chat: require('./chat'),
    CookieNotice: require('./cookie-notice'),
    Social: require('./social'),
    Wizard: require('./wizard')
});

module.exports = CTAs;
