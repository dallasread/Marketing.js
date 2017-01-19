var CTA = require('../cta'),
    CONFIG = {
        template: 'CHAT'
    };

var Chat = CTA.createCTA(CONFIG, function Chat(options) {
    var _ = this;

    CTA.call(_, options);
});

Chat.definePrototype({
});

module.exports = Chat;
