/*
    A CTA that builds a sequence of related forms
*/

var Wizard = require('../wizard'),
    CONFIG = {};

var CallBack = Wizard.createElement(CONFIG, function CallBack(options) {
    var _ = this;

    options = _.merge({
        type: 'callback cta-type-wizard'
    }, options);

    Wizard.call(_, options);
});

module.exports = CallBack;
