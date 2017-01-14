module.exports = {
    show: function show() {
        var _ = this;
        _.$(_.$element).show();
    },

    hide: function hide() {
        var _ = this;
        _.$(_.$element).hide();
    },

    toggle: function toggle() {
        var _ = this;
        _.$(_.$element).toggle();
    },

    fadeIn: function fadeIn() {
        var _ = this;
        _.$(_.$element).fadeIn();
    },

    fadeOut: function fadeOut() {
        var _ = this;
        _.$(_.$element).fadeOut();
    },

    fadeToggle: function fadeToggle() {
        var _ = this;
        _.$(_.$element).fadeToggle();
    },

    slideToggle: function slideToggle() {
        var _ = this;
        _.$(_.$element).slideToggle();
    },
};
