/*
    A CTA that builds a sequence of related forms
*/

var Wizard = require('../wizard'),
    CONFIG = {};

var CookieNotice = Wizard.createElement(CONFIG, function CookieNotice(options) {
    var _ = this;

    options = _.merge({
        type: ['cookie-notice cta-type-wizard']
    }, options);

    Wizard.call(_, options);
});

module.exports = CookieNotice;
