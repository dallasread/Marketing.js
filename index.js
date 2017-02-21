var CTAs = require('./ctas'),
    Marketing = new CTAs();

if (typeof window !== 'undefined') {
    window.Marketing = Marketing;
}

module.exports = Marketing;
