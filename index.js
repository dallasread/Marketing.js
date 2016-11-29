var RemetricAPI = require('./api'),
    loadExternal = require('load-external'),
    $script = document.querySelector('script[data-remetric]'),
    RealTime = require('./real-time'),
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
    window.Marketing = new Marketing({
        $: jQuery.noConflict(),
        CTAs: {
            chat: require('./ctas/chat')
        },
        api: new RemetricAPI({
            baseUrl: $script.dataset.baseUrl || 'http://api.lvh.me:3000',
            $: window.jQuery.noConflict()
        })
    });
});
