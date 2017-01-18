module.exports = function registerInteractions(proto, config) {
    var _ = this,
        interactions = {};

    for (var key in proto.interactions) {
        interactions[key] = proto.interactions[key];
    }

    for (var key in config.interactions) {
        interactions[key] = config.interactions[key];
    }

    _.interactions = interactions
};
