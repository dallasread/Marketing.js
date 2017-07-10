var Marketing = require('./ctas');

if (typeof window !== 'undefined') {
    window.Marketing = Marketing;
}

module.exports = Marketing;
