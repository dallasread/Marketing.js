var CTA = require('../cta'),
    CONFIG = {
        template: require('./index.html'),
        partials: {
            form: require('./form.html')
        }
    };

var Wizard = CTA.createCTA(CONFIG, function Wizard(options) {
    var _ = this;
    CTA.call(_, options);
    _.changeForm(_.initialForm);
});

Wizard.definePrototype({
    registerEvents: function registerEvents($el) {
        var _ = this;

        CTA.prototype.registerEvents.call(_, $el);

        $el.on('submit', 'form', function() {
            var useNext;

            for (var key in _.forms) {
                if (useNext) {
                    _.changeForm( _.forms[key] );
                    break;
                } else if (_.forms[key] === _.get('currentForm')) {
                    useNext = true;
                }
            }

            console.log(_, _.$(this), _.$(this).html());

            return false;
        });
    }
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

        _.set('currentForm', form);
    },
});

module.exports = Wizard;
