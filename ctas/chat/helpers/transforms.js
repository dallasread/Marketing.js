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
        if (!agent) return;
        var avatarsURL = window.Marketing.assetsUrl + '/avatars/';
        if (!agent.avatar) return avatarsURL + Math.floor((agent.email + '').length / 7) + '.jpg';
        return agent.avatar;
    }
};
