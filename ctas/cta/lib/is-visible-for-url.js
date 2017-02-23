function objectValues(obj) {
    return Object.keys(obj).map(function(i) {
        return obj[i];
    });
}

module.exports = function isVisibleForURL(show, hide) {
    var url = window.location.href,
        path;

    if (!(show instanceof Array)) show = objectValues(show || { 0: '*' });
    if (!(hide instanceof Array)) hide = objectValues(hide || {});

    if (typeof show === 'string') show = show.replace(/\s+/, '').split(',');
    if (typeof hide === 'string') hide = hide.replace(/\s+/, '').split(',');

    for (var i = hide.length - 1; i >= 0; i--) {
        path = hide[i];

        if (typeof path === 'string') path = new RegExp('^' + path.replace(/\*/g, '(.*?)') + '$');

        if (path.test(url)) {
            return false;
        }
    }

    for (i = show.length - 1; i >= 0; i--) {
        path = show[i];

        if (typeof path === 'string') path = new RegExp('^' + path.replace(/\*/g, '(.*?)') + '$');

        if (path.test(url)) {
            return true;
        }
    }

    return false;
};
