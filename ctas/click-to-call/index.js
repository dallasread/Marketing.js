/*
    A CTA that builds a sequence of related forms
*/

var Wizard = require('../wizard'),
    async = require('no-async'),
    loadExternal = require('load-external'),
    LazyLoader = require('../cta/lib/lazy-loader'),
    lazyLoader = new LazyLoader(),
    CONFIG = {},
    IS_SUPPORTED = (
        (
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia
        ) &&
        (1 ||
            /^https/.test(window.location.protocol)
        )
    );

lazyLoader.register('twilio', function(done) {
    loadExternal('https://media.twiliocdn.com/sdk/js/client/v1.4/twilio.min.js', done);
});

var ClickToCall = Wizard.createElement(CONFIG, function ClickToCall(options) {
    var _ = this;

    if (!IS_SUPPORTED) throw new Error('`ClickToCall` is not supported in this browser.');

    options = _.merge({
        type: 'click-to-call cta-type-wizard'
    }, options);

    Wizard.call(_, options);
});

ClickToCall.definePrototype({
    registerEvents: function registerEvents($el) {
        var _ = this;

        Wizard.prototype.registerEvents.call(_, $el);

        _.on('cancel', function() {
            _.changeForm(Object.keys(_.forms)[0]);

            if (window.Twilio) {
                window.Twilio.Device.disconnect();
            }
        });

        _.on('submit', function(data, form) {
            if (form.action !== 'call') return;

            lazyLoader.load('twilio', function() {
                var Twilio = window.Twilio;

                async.series([
                    function getLocalToken(next) {
                        _.capabilityToken = _.capabilityToken || _.get('cta.capabilityToken') || _.get('capabilityToken');
                        next();
                    },

                    function getRemoteToken(next) {
                        if (_.capabilityToken) return next();

                        (_.get('cta.getCapabilityToken') || _.get('getCapabilityToken') || _.getCapabilityToken).call(_, function(err, token) {
                            if (token) _.capabilityToken = token;
                            next(err, token);
                        });
                    }
                ], function(err) {
                    if (err) return alert(err);

                    alert(_.capabilityToken);

                    Twilio.Device.setup(_.capabilityToken);

                    var connection = Twilio.Device.connect({
                        name: 'Anonymous'
                    }, function() {
                        _.emit('connected');
                    });

                    connection.disconnect(function(conn) {
                        _.emit('cancel');
                    });
                });
            });
        });

        _.on('connected', function() {
            _.changeForm(Object.keys(_.forms)[2]);
        });
    },

    getCapabilityToken: function getCapabilityToken(done) {
        done(new Error('Function `getCapabilityToken` not implemented.'));
    },
});

module.exports = ClickToCall;
