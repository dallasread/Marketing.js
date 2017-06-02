var USERNAME_REGEX = /\{\{username\}\}/,
    URL_REGEX = /\{\{url\}\}/,
    COLOURS = {
        facebook: '#3b5998',
        twitter: '#00b6f1',
        youtube: '#b31217',
        instagram: '#405de6',
        pinterest: '#cb2027',
        linkedin: '#007bb6',
        tumblr: '#35465d',
        vimeo: '#45bbff',
        stumbleupon: '#eb4924',
        flickr: '#f40083',
        reddit: '#ff5700',
        google: '#df4a32',
        'google-plus': '#df4a32'
    },
    SHARE = {
        facebook: 'https://www.facebook.com/sharer/sharer.php?u={{url}}',
        twitter: 'https://twitter.com/home?status={{url}}',
        linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url={{url}}&title=&summary=&source=',
        tumblr: 'https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl={{url}}&posttype=link',
        stumbleupon: 'http://www.stumbleupon.com/submit?url={{url}}',
        reddit: 'http://www.reddit.com/submit?url={{url}}',
        google: 'https://plus.google.com/share?url={{url}}',
        'google-plus': 'https://plus.google.com/share?url={{url}}'
    };

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function defaultIcon(network) {
    return network.name.toLowerCase();
}

function defaultName(network) {
    var name = capitalize(network.key),
        sliced = name.slice(0, 3);

    if (sliced === 'You') {
        return sliced + capitalize(name.slice(3, name.length));
    } else {
        return name;
    }
}

function defaultHref(network) {
    if (network.intent === 'share') {
        if (SHARE[network.key]) {
            return SHARE[network.key];
        } else {
            return 'https://' + network.name.toLowerCase() + '.com';
        }
    } else {
        return 'https://' + network.name.toLowerCase() + '.com/{{username}}';
    }
}

module.exports = function networkDetector(key, data) {
    var username = typeof data === 'string' ? data : data.username,
        network = {
            key: key,
            username: username
        };

    data = typeof data === 'object' ? data : {};

    network.intent = data.intent || 'visit';
    network.name = data.name || defaultName(network);
    network.icon = data.icon || defaultIcon(network);
    network.color = data.color || COLOURS[network.key] || '#333';

    network.href = (data.href || defaultHref(network)).toString()
        .replace(USERNAME_REGEX, network.username || '')
        .replace(URL_REGEX, encodeURIComponent(window.location.href));

    return network;
};
