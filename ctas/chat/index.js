require('./helpers/triggers');

var CTA = require('../cta'),
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

    CTA.call(_, options);
});

Chat.definePrototype({
    ready: function ready() {
        var _ = this;

        CTA.prototype.ready.call(_);

        if (!_.get('events.length')) {
            _.emit('noMessages');
        }
    },

    addMessage: function addMessage(msg) {
        var _ = this;
        _.push('events', msg);
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
