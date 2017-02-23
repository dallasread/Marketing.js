/*
    A CTA that builds a sequence of related forms
*/

var CTA = require('../cta'),
    CONFIG = {
        template: '{{>form form=currentForm}}',
        partials: {
            form: require('./form/index.html')
        }
    };

var Wizard = CTA.createCTA(CONFIG, function Wizard(options) {
    var _ = this;
    CTA.call(_, options);
    _.changeForm(_.initialForm);
});

Wizard.definePrototype({
    registerEvents: function registerEvents($el) {
        var _ = this,
            forms = _.get('cta.forms');

        CTA.prototype.registerEvents.call(_, $el);

        $el.on('submit', 'form', function() {
            var useNext;

            for (var key in forms) {
                if (useNext) {
                    _.changeForm( forms[key] );
                    break;
                } else if (forms[key] === _.get('currentForm')) {
                    useNext = true;
                }
            }

            return false;
        });
    }
});

Wizard.definePrototype({
    changeForm: function changeForm(form) {
        var _ = this,
            forms = _.get('cta.forms');

        if (typeof forms === 'object') {
            if (typeof form === 'string') {
                form = forms[form];
            }

            form = form || forms[Object.keys(forms)[0]];
        }

        _.set('currentForm', form);
    },
});

module.exports = Wizard;
