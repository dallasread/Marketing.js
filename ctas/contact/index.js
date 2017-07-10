/*
    A CTA that builds a sequence of related forms
*/

var Wizard = require('../wizard'),
    CONFIG = {};

var Contact = Wizard.createElement(CONFIG, function Contact(options) {
    var _ = this;

    options = _.merge({
        type: 'contact cta-type-wizard'
    }, options);

    Wizard.call(_, options);
});

module.exports = Contact;
