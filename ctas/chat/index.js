var CTA = require('../cta'),
    CONFIG = {
        template: '{{>awesome}}{{num}}' ,
        partials: {
            awesome: 'AWESOME'
        }
    };

var Chat = CTA.createCTA(CONFIG, function Chat(options) {
    var _ = this;

    CTA.call(_, options);
});

Chat.definePrototype({
    registerEvents: function registerEvents($el) {
        var _ = this;

        CTA.prototype.registerEvents.call(_, $el);

        $el.on('mousemove', function() {
            _.set('num', Math.random());
        });
    }
});

module.exports = Chat;
