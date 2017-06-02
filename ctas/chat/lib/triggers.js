/*
    Register custom triggers for the Chat CTA
*/

var Trigger = require('../../cta/lib/trigger');

function sendMsg(cta, message) {
    var thing = {
            model: 'event',
            data: {
                action: 'message',
                from: 'agent',
                cta: cta.get('cta.id'),
                user: cta.get('user.id'),
                agent: cta.get('agent.id'),
                message: message
            }
        };

    cta.api.track({
        thing: thing
    });

    cta.addMessage(thing);
}

Trigger.registerEvent('noMessages', function bindNoMessageEvent() {
    var _ = this;

    _.cta.on(_.event, function noMessageEvent() {
        _.trigger(function() {
            sendMsg(_.cta, _.message);
        });
    });
});

Trigger.registerAction('sendMessage', function sendMessage() {
    sendMsg(_.cta, _.message);
});
