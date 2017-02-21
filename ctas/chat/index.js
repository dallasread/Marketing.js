require('./helpers/triggers');

var CTA = require('../cta'),
    howler = require('howler'),
    CONFIG = {
        template: '{{>?currentPath}}',
        partials: {
            '/prompter': require('./prompter/index.html'),
            '/interactions': require('./interactions/index.html')
        },
        transforms: require('./helpers/transforms')
    };

var Chat = CTA.createCTA(CONFIG, function Chat(options) {
    var _ = this;

    options.data.currentPath = '/prompter';
    options.bell = new howler.Howl({
        autoplay: false,
        src: [
            '/audio/pling.ogg',
            '/audio/pling.mp3',
            '/audio/pling.wav'
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

        return _;
    },

    addMessage: function addMessage(msg) {
        var _ = this;

        _.push('events', msg);

        if (msg.data.from === 'agent') {
            _.bell.stop();
            _.bell.play();
        }

        _.scrollMessages();
    },

    scrollMessages: function scrollMessages() {
        var _ = this,
            $messages = _.$el.find('.interactions .messages');

        if ($messages.length) {
            $messages.scrollTop( $messages[0].scrollHeight );
        }
    }
});

Chat.definePrototype(require('./helpers/events'));

module.exports = Chat;
