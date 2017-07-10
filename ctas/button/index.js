/*
    A CTA that builds a sequence of related forms
*/

var Wizard = require('../wizard'),
    CONFIG = {};

var Button = Wizard.createElement(CONFIG, function Button(options) {
    var _ = this;

    options = _.merge({
        type: 'button cta-type-wizard'
    }, options);

    Wizard.call(_, options);

    _.forms.button = {
        fields: {
            button: {
                value: _.get('cta.button.value'),
                type: 'submit'
            }
        }
    };

    _.forms.redirect = {
        redirect: _.get('cta.button.redirect')
    };

    _.changeForm();
});

module.exports = Button;
