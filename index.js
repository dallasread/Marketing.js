var RemetricAPI = require('./api'),
    loadExternal = require('load-external'),
    $script = document.querySelector('script[data-remetric]'),
    RealTime = require('../remetric-admin/utils/real-time'),
    Marketing = require('./marketing'),
    async = require('no-async');

async.parallel([
    function loadjQuery(next) {
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
            baseUrl: $script.dataset.baseUrl || 'http://api.lvh.me:3000',
            $: $
        });

    window.Marketing = new Marketing({
        $: $,
        api: api,
        CTAs: {
            chat: require('./ctas/chat')
        },
        realTime: new RealTime({
            debug: true,
            api: api,
            public_key: '218ef838a5c8a8e2b92f'
        })
    });
});
