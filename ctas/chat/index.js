var CTA = require('../cta');

var Chat = CTA.generate(function Chat(options) {
    var _ = this;

    CTA.call(_, options);
});

Chat.definePrototype({
});

module.exports = Chat;
