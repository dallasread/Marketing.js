/*
    A Chat CTA
*/

var CTA = require('../cta'),
    howler = require('howler'),
    CONFIG = {
        template: '{{>?currentPath}}',
        partials: {
            '/prompter': require('./prompter/index.html'),
            '/interactions': require('./interactions/index.html')
        },
        transforms: require('./lib/transforms')
    };

var Chat = CTA.createElement(CONFIG, function Chat(options) {
    var _ = this,
        assetURL = options.api.baseUrl.replace(/api/, 'assets'); // TODO: Generalize

    options.data.currentPath = '/prompter';
    options.bell = new howler.Howl({
        autoplay: false,
        src: [
            assetURL + '/audio/pling.ogg',
            assetURL + '/audio/pling.mp3',
            assetURL + '/audio/pling.wav'
        ]
    });

    CTA.call(_, options);
});

Chat.definePrototype({
    ready: function ready() {
        var _ = this;

        CTA.prototype.ready.call(_);

        if (!_.get('events.length')) {
            _.emit('noMessages');
        }

        _.connect();

        return _;
    },

    connect: function connect() {
        var _ = this;

        _.realTime.connect('private-events-' + _.get('user.access_token'), function() {
            _.realTime.channel.bind('event', function(e) {
                if (e.data.from === 'visitor') return;
                _.addMessage(e);
            });

            _.realTime.connection.bind('disconnected', function() {
                var user = _.api.user || {};
                user.data = user.data || {};
                user.data.isOnline = false;
                _.api.post('/me', { user: user });
            });
        });

        window.onbeforeunload = function() {
            var user = _.api.user || {};
            user.data = user.data || {};
            user.data.isOnline = false;
            _.api.post('/me', { user: user });
        };
    },

    addMessage: function addMessage(msg) {
        var _ = this;

        _.push('events', msg);

        if (msg.data.from === 'agent') {
            _.bell.stop();
            _.bell.play();
        }

        setTimeout(function() {
            _.scrollMessages();
        }, 10);
    },

    scrollMessages: function scrollMessages() {
        var _ = this,
            $messages = _.$el.find('.interactions .messages');

        if ($messages.length) {
            $messages.scrollTop( $messages[0].scrollHeight );
        }
    }
});

Chat.definePrototype({
    registerEvents: require('./lib/events')
});

require('./lib/triggers');

module.exports = Chat;
