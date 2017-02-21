var Marketing = require('./marketing');

if (typeof window !== 'undefined') {
    window.Marketing = Marketing;
}

module.exports = Marketing;
