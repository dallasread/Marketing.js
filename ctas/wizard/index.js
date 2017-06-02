/*
    A CTA that builds a sequence of related forms
*/

var CTA = require('../cta'),
    CONFIG = {
        template: '{{>form form=currentForm}}',
        partials: {
            form: require('./form.html')
        }
    };

var Wizard = CTA.createElement(CONFIG, function Wizard(options) {
    var _ = this;

    options.type = 'wizard';

    CTA.call(_, options);

    _.defineProperties({
        forms: _.get('cta.forms'),
        response: {}
    });

    _.changeForm( _.initialForm );
});

Wizard.definePrototype({
    registerEvents: function registerEvents($el) {
        var _ = this;

        CTA.prototype.registerEvents.call(_, $el);

        $el.on('submit', 'form', function() {
            var form = this;

            (form.data('form').validate || _.validateForm).call(_, form, function(err) {
                _.set('currentForm.response', _.serialize( form ) );
                _.changeForm( +1 );
            });

            return false;
        });
    }
});

Wizard.definePrototype({
    validateForm: function validateForm(form, done) {
        done(undefined, form);
    }
});

Wizard.definePrototype({
    changeForm: function changeForm(formOrDelta) {
        var _ = this,
            form;

        if (typeof _.forms === 'object') {
            if (typeof formOrDelta === 'string') {
                form = _.forms[formOrDelta];
            } else if (typeof formOrDelta === 'number') {
                var keys = Object.keys(_.forms),
                    nextIndex = findCurrentIndex(_.forms, _.get('currentForm')) + formOrDelta;

                form = _.forms[ keys[nextIndex] ];
            } else if (formOrDelta === 'object') {
                form = formOrDelta;
            }
        } else if (formOrDelta === 'object') {
            form = formOrDelta;
        }

        if (typeof formOrDelta === 'undefined' && !form) {
            form = _.forms[Object.keys(_.forms)[0]];
        }

        if (!form) {
            console.warn('No form supplied.');
            _.set('currentForm', undefined);
            return false;
        }

        form.id = form.id || parseInt(Date.now() * Math.random());

        _.set('currentForm', form);

        if (form.redirect) {
            window.location.href = form.redirect;
        }

        return form;
    },
});

function findCurrentIndex(forms, form) {
    if (forms instanceof Array) {
        return forms.indexOf(form);
    }

    var i = 0;

    for (var key in forms) {
        if (forms[key] === form) {
            return i;
        }

        i++;
    }
}

module.exports = Wizard;
