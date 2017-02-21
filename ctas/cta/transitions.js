module.exports = {
    show: function show() {
        var _ = this;
        _.$el.show();
    },

    hide: function hide() {
        var _ = this;
        _.$el.hide();
    },

    toggle: function toggle() {
        var _ = this;
        _.$el.toggle();
    },

    fadeIn: function fadeIn() {
        var _ = this;
        _.$el.fadeIn();
    },

    fadeOut: function fadeOut() {
        var _ = this;
        _.$el.fadeOut();
    },

    fadeToggle: function fadeToggle() {
        var _ = this;
        _.$el.fadeToggle();
    },

    slideToggle: function slideToggle() {
        var _ = this;
        _.$el.slideToggle();
    },
};
