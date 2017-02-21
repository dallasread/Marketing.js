var CTA = require('../cta'),
    CONFIG = {
        template: '{{>?currentPath}}',
        partials: {
            '/prompter': require('./prompter/index.html'),
            '/interactions': require('./interactions/index.html')
        },
        transforms: {
            truncate: function truncate(str, length) {
                if (!str) return '';
                if (str.length < length) return str;
                return str.slice(0, length) + '...';
            },
            lastReceivedMessage: function lastReceivedMessage(events) {
                events = (events || []).filter(function(e) {
                    return e.data && e.data.action === 'message' && e.data.from !== 'visitor';
                });

                if (!events.length) return;

                return events[events.length - 1];
            },
            avatar: function avatar(agent) {
                if (!agent) return;
                var avatarsURL = window.Marketing.assetsUrl + '/avatars/';
                if (!agent.avatar) return avatarsURL + Math.floor((agent.email + '').length / 7) + '.jpg';
                return agent.avatar;
            }
        }
    };

var Chat = CTA.createCTA(CONFIG, function Chat(options) {
    var _ = this;

    options.data.currentPath = '/prompter';

    CTA.call(_, options);

});

Chat.definePrototype({
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

Chat.definePrototype({
    registerEvents: function registerEvents($el) {
        var _ = this;

        CTA.prototype.registerEvents.call(_, $el);

        _.on('update', function(key, value) {
            if (key === 'currentPath' && value === '/interactions') {
                setTimeout(function() {
                    $el.find('textarea').trigger('focus');
                }, 0);
            }
        });

        $el.on('keypress', 'textarea', function(e) {
            if ((e.keyCode ? e.keyCode : e.which) !== 13) return;
            $el.find('form').trigger('submit');
            return false;
        });

        $el.on('submit', 'form', function() {
            var _publish = { pusher: true };

            if (/*!this.get('convo.data.agent.online') &&*/ _.showBySchedule(_.get('convo.data.agent.schedules'), _.get('convo.data.agent.offset'))) {
                _publish.twilio = true;
            }

            var $textarea = $el.find('textarea'),
                body = $textarea.val().trim(),
                thing = {
                    model: 'event',
                    data: {
                        action: 'message',
                        message: {
                            body: body
                        },
                        convo: _.get('convo.id'),
                        user: _.get('convo.data.user.id'),
                        cta: _.get('cta.id'),
                        from: 'visitor'
                    },
                    _publish: _publish
                };

            if (!body.length) return false;

            $textarea.val('');

            // _.api.post('/things', { thing: thing }, function() { });
            _.addMessage(thing);

            return false;
        });
    }
});

// Trigger.registerEvent('noMessages', function bindNoMessageEvent() {
//     var _ = this;
//
//     _.cta.on(_.event, function noMessageEvent() {
//         _.trigger(function() {
//             var msg = {
//                 data: {
//                     action: 'message',
//                     from: 'agent',
//                     agent: _.cta.get('convo.data.agent'),
//                     message: _.message
//                 }
//             };
//
//             _.cta.addMessage(msg);
//         });
//     });
// });

module.exports = Chat;
