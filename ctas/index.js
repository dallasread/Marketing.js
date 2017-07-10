/*
    The Available CTAs
*/

module.exports = Object.create(Object.prototype, {
    Button:        { enumerable: true, value: require('./button') },
    CallBack:      { enumerable: true, value: require('./call-back') },
    Chat:          { enumerable: true, value: require('./chat') },
    ClickToCall:   { enumerable: true, value: require('./click-to-call') },
    Contact:       { enumerable: true, value: require('./contact') },
    CookieNotice:  { enumerable: true, value: require('./cookie-notice') },
    Social:        { enumerable: true, value: require('./social') },
    Survey:        { enumerable: true, value: require('./survey') },
    Wizard:        { enumerable: true, value: require('./wizard') }
});
