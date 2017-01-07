var Generator = require('generate-js'),
    cookies = require('browser-cookies');

var Marketing = Generator.generate(function Marketing(options) {
    var _ = this;

    _.defineProperties(options);
    _.defineProperties({
        ctas: []
    });

    _.findCTAs();
});

Marketing.definePrototype({
    findCTAs: function findCTAs() {
        var _ = this,
            cookieName = _.api.publishableKey + '-access-token',
            time_zone_offset = new Date().getTimezoneOffset() / -60;

        return _.api.get('/marketing', {
            access_token: cookies.get(cookieName),
            time_zone_offset: time_zone_offset
        }, function(err, response) {
            if (typeof response !== 'object' || typeof response.user !== 'object' || !(response.ctas instanceof Array)) return;

            _.user = response.user;
            _.api.setUser(_.user);
            _.realTime.channelName = 'private-events-' + _.user.access_token;

            cookies.set(cookieName, _.user.access_token, { expires: 365 * 25 });

            for (var i = response.ctas.length - 1; i >= 0; i--) {
                _.registerCTA(response.ctas[i]);
            }
        });
    },

    registerCTA: function registerCTA(options) {
        var _ = this;

        options.marketing = _;
        options.api = _.api;
        options.realTime = _.realTime;
        options.user = _.user;
        options.$ = _.$;

        _.ctas.push( new _.CTAs[options.data.type](options) );
    },
});

module.exports = Marketing;
