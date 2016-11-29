var Route = require('../../../remetric-admin/utils/route');

var Chat = Route.generate(function Chat(options) {
    var _ = this;

    options = {
        data: {
            count: 0,
            path: '/prompt'
        },
        template: '{{#if path === \'/prompt\'}}{{>prompt}}{{else}}{{>interact}}{{/if}}',
        $element: document.getElementById('remetric'),
        partials: {
            prompt: '<a href="/interact"><img src="../assets/pr.jpeg"></a>',
            interact: 'These are the interactions. <a href="/prompt">To The Prompt &raquo;</a>',
        },
        interactions: {
            count: {
                event: 'click',
                target: '[href]',
                action: function action(e, $el) {
                    var _ = this;
                    _.set('path', $el.attr('href'));
                    return false;
                },
            }
        }
    };

    Route.call(_, options);

    _.$(_.$element).addClass('chat');
});

Chat.definePrototype({
});

module.exports = Chat;
