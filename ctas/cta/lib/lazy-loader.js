var Generator = require('generate-js');

var LazyLoader = Generator.generate(function LazyLoader(options) {
    var _ = this;

    options = typeof options === 'object' ? options : {};

    _.defineProperties({
        debug: options.debug,
        loaders: {}
    });
});

LazyLoader.definePrototype({
    register: function register(name, func) {
        var _ = this;

        _.loaders[name] = {
            name: name,
            func: func,
            state: 'unloaded',
            dependents: []
        };

        if (_.debug) console.log('LazyLoader', 'Register', name);

        return _.loaders[name];
    },

    load: function load(name, done, thisArg) {
        var _ = this,
            loader = _.loaders[name];

        if (!loader) {
            if (_.debug) console.warn('LazyLoader', 'No Loader Found:', name);
            return;
        }

        if (loader.state === 'loaded') {
            if (_.debug) console.log('LazyLoader', 'Load', name);
            done.call(thisArg || _);
        } else {
            if (_.debug) console.log('LazyLoader', 'Load Added to Stack', name);
            loader.dependents.push([done, thisArg]);

            if (loader.state !== 'loading') {
                loader.state = 'loading';
            if (_.debug) console.log('LazyLoader', 'Loading', name);
                loader.func.call(_, function() {
                    _.loadComplete(name);
                });
            }
        }
    },

    loadComplete: function loadComplete(name) {
        var _ = this,
            loader = _.loaders[name];

        loader.state = 'loaded';

        if (_.debug) console.log('LazyLoader', 'Load Complete', name);

        for (var i = 0; i < loader.dependents.length; i++) {
            var args = loader.dependents[i];

            args[0].call(args[1] || _);
        }
    }
});

module.exports = LazyLoader;
