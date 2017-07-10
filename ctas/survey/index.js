/*
    A CTA that builds a survey
*/

var Wizard = require('../wizard'),
    CONFIG = {};

var Survey = Wizard.createElement(CONFIG, function Survey(options) {
    var _ = this;

    options = _.merge({
        type: 'survey cta-type-wizard'
    }, options);

    Wizard.call(_, options);
});

module.exports = Survey;
