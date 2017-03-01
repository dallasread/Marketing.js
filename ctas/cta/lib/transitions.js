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

        if (typeof _.$el.fadeIn === 'function') {
            _.$el.fadeIn();
        } else {
            _.$el.show();
        }
    },

    fadeOut: function fadeOut() {
        var _ = this;

        if (typeof _.$el.fadeOut === 'function') {
            _.$el.fadeOut();
        } else {
            _.$el.hide();
        }
    },

    fadeToggle: function fadeToggle() {
        var _ = this;

        if (typeof _.$el.fadeToggle === 'function') {
            _.$el.fadeToggle();
        } else {
            _.$el.toggle();
        }
    },

    slideToggle: function slideToggle() {
        var _ = this;

        if (typeof _.$el.slideToggle === 'function') {
            _.$el.slideToggle();
        } else {
            _.$el.toggle();
        }
    }
};
