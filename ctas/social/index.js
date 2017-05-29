/*
    A CTA that builds a social sharing widget
*/

function findNetwork(key, data) {
    var network = {
        key: key
    };

    return network;
}

var CTA = require('../cta'),
    loadExternal = require('load-external'),
    CONFIG = {
        template: require('./index.html'),
        transforms: {
            findNetwork: function findNetwork(key, data) {
                return {
                    href: 'https://' + key + '.com',
                    description: key,
                    icon: key
                };
            },
        }
    };

var Social = CTA.createElement(CONFIG, function Social(options) {
    var _ = this;

    CTA.call(_, options);

    _.set('iconPrefix', options.iconPrefix || 'fa fa-');

    _.defineProperties({
        networks: _.get('cta.networks')
    });
});

CTA.lazyLoader.register('font-awesome', function(done) {
    loadExternal('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css', done);
});

Social.definePrototype({
    ready: function ready() {
        var _ = this;

        CTA.lazyLoader.load('font-awesome', function() {
            CTA.prototype.ready.call(_);
        }, _);

        return _;
    },

    registerEvents: function registerEvents($el) {
        var _ = this;

        CTA.prototype.registerEvents.call(_, $el);

        // $el.on('submit', 'form', function() {
        //     var form = this;

        //     (form.data('form').validate || _.validateForm).call(_, form, function(err) {
        //         _.set('currentForm.response', _.serialize( form ) );
        //         _.changeForm( +1 );
        //     });

        //     return false;
        // });
    }
});

module.exports = Social;
