/*
    Register custom triggers for the Chat CTA
*/

var Trigger = require('../../cta/lib/trigger');

Trigger.registerEvent('noMessages', function bindNoMessageEvent() {
    var _ = this;

    _.cta.on(_.event, function noMessageEvent() {
        _.trigger(function() {
            _.cta.addMessage({
                data: {
                    action: 'message',
                    from: 'agent',
                    agent: _.cta.get('agent'),
                    message: _.message
                }
            });
        });
    });
});

Trigger.registerAction('sendMessage', function sendMessage() {
    var _ = this;

    _.cta.addMessage({
        data: {
            action: 'message',
            from: 'agent',
            agent: _.cta.get('agent'),
            message: _.message
        }
    });
});
