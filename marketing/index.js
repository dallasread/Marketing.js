var Generator = require('generate-js');

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
            cta;

        var ctas = [{ type: 'chat' }];

        for (var i = ctas.length - 1; i >= 0; i--) {
            cta = ctas[i];
            cta.api = _.api;
            cta.marketing = _;
            cta.$ = _.$;
            cta = new _.CTAs[cta.type](cta);
            _.ctas.push(cta);
        }
    },
});

module.exports = Marketing;
