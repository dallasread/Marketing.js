var RemetricAPI = require('../remetric-admin/utils/api'),
    loadExternal = require('load-external'),
    $script = document.querySelector('script[data-remetric]'),
    RealTime = require('../remetric-admin/utils/real-time'),
    Marketing = require('./marketing'),
    async = require('no-async');

async.parallel([
    function loadjQuery(next) {
        if (typeof jQuery === 'object') return next();

        loadExternal('//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', function() {
            next();
        });
    },
    function loadCSS(next) {
        loadExternal($script.dataset.css || 'marketing.css', function() {
            next();
        });
    },
], function() {
    var $ = jQuery.noConflict(),
        api = new RemetricAPI({
            baseUrl: 'http://' + $script.dataset.remetric + '.unstories.com/api',
            publishableKey: $script.dataset.remetric,
            $: $
        });

    window.Marketing = new Marketing({
        $: $,
        assetsUrl: $script.dataset.css.replace('marketing.css', 'assets'),
        api: api,
        CTAs: {
            chat: require('./ctas/chat')
        },
        realTime: new RealTime({
            public_key: '218ef838a5c8a8e2b92f',
            authEndpoint: api.baseUrl + '/socket/auth',
            auth: function apiAuth() {
                return {
                    headers: {
                        Authorization: 'Basic ' + api.generateAuth()
                    }
                };
            },
            onDisconnect: function onDisconnect() {
                // api.post('/socket/disconnect', {}, function() {});
            }
        })
    });
});
