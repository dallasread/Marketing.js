var CustomElement = require('../../../remetric-admin/utils/custom-element');
var last = { data: { action: 'message', fromAgent: true, message: { body: 'And if that.' } } };
var Chat = CustomElement.generate(function Chat(cta) {
    var _ = this,
        options = {
            data: {
                showInteractions: false,
                events: [
                    { data: { action: 'message', fromAgent: true, message: { body: 'This is my message!' } } },
                    last,
                    { data: { action: 'message', message: { body: 'Thanks...' } } },
                ],
                lastEvent: last
            },
            template: require('./index.html'),
            partials: {
                interactions: require('./interactions.html'),
                prompter: require('./prompter.html'),
            },
            transforms: {
                truncate: function truncate(str, length) {
                    if (!str) return '';
                    if (str.length < length) return str;
                    return str.slice(0, length) + '...';
                },
            },
            interactions: {
                toggleInteractions: {
                    event: 'click',
                    target: '[data-toggle-interactions]',
                    action: function action(e, $el) {
                        var _ = this;
                        _.set('inited', true);
                        _.set('showInteractions', !_.get('showInteractions'));
                        _.$(_.$element).find('textarea').trigger('focus');
                        return false;
                    },
                },
                sendMessage: {
                    event: 'submit',
                    target: 'form[data-send-message]',
                    action: function action(e, $el) {
                        var _ = this,
                            msg = $el.find('textarea').val().trim();

                        if (!msg.length) return false;

                        $el.find('textarea').val('');

                        _.get('events').push({ data: { action: 'message', message: { body: msg } } });
                        _.update();
                        _.scrollMessages();

                        return false;
                    },
                },
                enterPress: {
                    event: 'keypress',
                    target: 'textarea',
                    action: function action(e, $el) {
                        if ((e.keyCode ? e.keyCode : e.which) !== 13) return;
                        $el.closest('form').trigger('submit');
                        return false;
                    },
                }
            }
        };

    CustomElement.call(_, options);

    _.$(_.$element).appendTo('body');
    _.$(_.$element).addClass('cta chat chat-' + cta.data.position);

    _.set('cta', cta);
});

Chat.definePrototype({
    scrollMessages: function scrollMessages() {
        var _ = this,
            $messages = _.$(_.$element).find('.interactions .messages');

        $messages.scrollTop( $messages[0].scrollHeight );
    }
});

module.exports = Chat;
