// JUST SAMPLE STUFF FOR NOW...

var CTA = require('../cta'),
    CONFIG = {
        template: require('./index.html'),
        partials: {
            form: require('./form.html')
        },
        interactions: {
            submit: {
                event: 'submit',
                // target: 'form',
                action: function action(e, $el) {
                    var _ = this,
                        useNext;

                    for (var key in _.data.forms) {
                        if (useNext) {
                            _.changeForm( _.data.forms[key] );
                            break;
                        } else if (_.data.forms[key] === _.data.currentForm_) {
                            useNext = true;
                        }
                    }

                    console.log($el, $el.html());

                    return false;
                },
            }
        }
    };

var Wizard = CTA.createCTA(CONFIG, function Wizard(options) {
    var _ = this;
    CTA.call(_, options);
    _.changeForm(_.data.initialForm);
});

Wizard.definePrototype({
    changeForm: function changeForm(form) {
        var _ = this;

        if (typeof _.data.forms === 'object') {
            if (typeof form === 'string') {
                form = _.data.forms[form];
            }

            form = form || _.data.forms[Object.keys(_.data.forms)[0]];
        }

        _.data.currentForm_ = form;
        _.render();
    },
});

module.exports = Wizard;
