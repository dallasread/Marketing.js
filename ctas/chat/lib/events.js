/*
    UI Events for the Chat CTA
*/

var CTA = require('../../cta');

module.exports = function registerEvents($el) {
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

        if (/*!this.get('agent.online') &&*/ _.showBySchedule(_.get('agent.schedules'), _.get('agent.offset'))) {
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
                    user: _.get('user.id'),
                    cta: _.get('cta.id'),
                    from: 'visitor'
                },
                _publish: _publish
            };

        if (!body.length) return false;

        $textarea.val('');

        _.api.track('message', { thing: thing }, _);

        _.addMessage(thing);

        return false;
    });
};
