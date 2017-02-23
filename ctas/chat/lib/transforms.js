/*
    Template Helpers for the Chat CTA
*/

module.exports = {
    truncate: function truncate(str, length, ellipsis) {
        if (!str) return '';
        if (str.length < length) return str;
        return str.slice(0, length) + (ellipsis || '...');
    },

    lastReceivedMessage: function lastReceivedMessage(events) {
        events = (events || []).filter(function(e) {
            return e.data && e.data.action === 'message' && e.data.from !== 'visitor';
        });

        if (!events.length) return;

        return events[events.length - 1];
    },

    avatar: function avatar(agent) {
        var avatarsURL = window.rm.api.baseUrl.replace(/api/, 'assets') + '/avatars/'; // TODO: Generalize
        if (!agent) return avatarsURL + '7.jpg';
        if (!agent.avatar) return avatarsURL + Math.floor((agent.email + '').length / 7) + '.jpg';
        return agent.avatar;
    }
};
