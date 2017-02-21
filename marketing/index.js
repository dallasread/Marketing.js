/*

Marketing.js
- Organizes CTAs
- Handles jQuery implementation

*/

var Generator = require('generate-js'),
    CTAs = require('../ctas');

var Marketing = Generator.generate(function Marketing(options) {
    if (typeof options !== 'object') options = {};

    var _ = this,
        ctas = options.ctas || [];

    options.ctas = [];

    _.defineProperties(options);

    for (var i = 0; i < ctas.length; i++) {
        _.registerCTA(ctas[i]);
    }
});

Marketing.CTAs = new CTAs();

Marketing.definePrototype({
    registerCTA: function registerCTA(cta) {
        if (typeof cta !== 'object') cta = {};

        var _ = this,
            $el = cta.$el || (cta.$ || _.$ || function() {})('<div>'),
            type = cta.type || (typeof cta.data === 'object' ? cta.data.type : '');

        if (typeof $el.on !== 'function') return console.warn('No emitting `cta.$el` supplied.');
        if (!Marketing.CTAs[type])        return console.warn('No `' + type + '` CTA found.');

        _.ctas.push(
            new Marketing.CTAs[type]({
                data: cta.data,
                marketing: _,
                api: _.api,
                $el: $el
            }).ready()
        );
    }
});

module.exports = Marketing;
