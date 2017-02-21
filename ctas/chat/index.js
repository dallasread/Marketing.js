var CTA = require('../cta'),
    CONFIG = {
        template: '{{num || \'hi\'}} - {{num || \'hi\'}} - {{num || \'hi\'}} - {{num || \'hi\'}} - {{num || \'hi\'}}' 
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
