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

                    for (var key in _.forms) {
                        if (useNext) {
                            _.changeForm( _.forms[key] );
                            break;
                        } else if (_.forms[key] === _.currentForm_) {
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
    _.changeForm(_.initialForm);
});

Wizard.definePrototype({
    changeForm: function changeForm(form) {
        var _ = this;

        if (typeof _.forms === 'object') {
            if (typeof form === 'string') {
                form = _.forms[form];
            }

            form = form || _.forms[Object.keys(_.forms)[0]];
        }

        _.currentForm_ = form;
        _.render();
    },
});

module.exports = Wizard;
