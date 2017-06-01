var USERNAME_REGEX = /\{\{username\}\}/,
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
    };

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function defaultIcon(network) {
    return network.name.toLowerCase();
}

function defaultName(network) {
    return capitalize(network.key);
}

function defaultHref(network) {
    return 'https://' + network.name.toLowerCase() + '.com/{{username}}';
}

module.exports = function networkDetector(key, data) {
    var username = typeof data === 'string' ? data : data.username,
        network = {
            key: key,
            username: username
        };

    data = typeof data === 'object' ? data : {};

    network.name = data.name || defaultName(network);
    network.href = (data.href || defaultHref(network)).toString().replace(USERNAME_REGEX, network.username || '');
    network.icon = data.icon || defaultIcon(network);
    network.color = data.color || COLOURS[network.key] || '#333';

    return network;
};
