var CustomElement = require('../../remetric-admin/utils/custom-element'),
    Trigger = require('./trigger');

function objValues(obj) {
    return Object.keys(obj).map(function(i) {
        return obj[i];
    });
}

var CTA = CustomElement.generate(function CTA(options) {
    var _ = this,
        cta = options.cta;

    CustomElement.call(_, {}, options);

    _.set('cta', cta);

    _.defineProperties({
        id: 'cta-' + (cta.id || Date.now()),
        api: options.api,
        marketing: options.marketing,
        realTime: options.realTime
    });

    if (!_.isVisibleForPage(_.get('cta.visibility.show'), _.get('cta.visibility.hide'))) {
        console.warn('CTA #' + _.id + ' not visible for this page.');
        return _.emit('notVisible');
    }

    _.$element.addClass('cta cta-chat cta-position-' + cta.data.position);
    _.$element.attr('id', _.id);

    if (cta.data.colours) {
        _.$('<style type="text/css">\
            #' + _.id + ' .primary-bg {\
                background: ' + cta.data.colours.primary + '\
            }\
        </style>').appendTo('body');
    }

    for (var key in (cta.data.triggers || {})) {
        _.registerTrigger( cta.data.triggers[key] )
    }

    _.ready();
});

CTA.definePrototype(require('./transitions'));
CTA.definePrototype(require('./schedules'));

CTA.definePrototype({
    ready: function ready() {
        var _ = this,
            strategy = _.get('cta.data.attach.strategy') || 'appendTo',
            target = _.get('cta.data.attach.target') || 'body';

        _.$element.hide();
        _.$element[strategy](target);
        _.emit('ready');
    },

    registerTrigger: function registerTrigger(trigger) {
        if (!trigger.isActive) return;

        var _ = this;
        trigger.cta = _;
        new Trigger( trigger );
    },

    isVisibleForPage: function isVisibleForPage(show, hide) {
        var _ = this,
            url = window.location.href,
            path;

        if (!(show instanceof Array)) show = objValues(show || { 0: '*' });
        if (!(hide instanceof Array)) hide = objValues(hide || {});

        if (typeof show === 'string') show = show.replace(/\s+/, '').split(',');
        if (typeof hide === 'string') hide = hide.replace(/\s+/, '').split(',');

        for (var i = hide.length - 1; i >= 0; i--) {
            path = hide[i];

            if (typeof path === 'string') path = new RegExp('^' + path.replace(/\*/g, '(.*?)') + '$');

            if (path.test(url)) {
                return false;
            }
        }

        for (var i = show.length - 1; i >= 0; i--) {
            path = show[i];

            if (typeof path === 'string') path = new RegExp('^' + path.replace(/\*/g, '(.*?)') + '$');

            if (path.test(url)) {
                return true;
            }
        }

        return false;
    }
});

Trigger.registerEvent('scroll', function bindScrollEvent() {
    var _              = this,
        $              = _.cta.$,
        $window        = $(window),
        windowHeight   = $(window).height(),
        documentHeight = $(document).height(),
        isTag          = typeof _.scroll === 'string' && !/%|px/.test(_.scroll),
        isPercent      = typeof _.scroll === 'string' &&     /%/.test(_.scroll);

    function onScroll() {
        var scrollTop = $window.scrollTop();

        if (isTag) {
            var tagOffset = $(_.scroll).offset().top;

            if (scrollTop + windowHeight >= tagOffset) {
                $window.off('scroll', onScroll);
                _.trigger();
            }
        } else if (isPercent) {
            var percent = (scrollTop + windowHeight) / documentHeight * 100;

            if (percent >= parseInt(_.scroll)) {
                $window.off('scroll', onScroll);
                _.trigger();
            }
        } else {
            var scrolled = scrollTop + windowHeight;

            if (scrolled >= parseInt(_.scroll)) {
                $window.off('scroll', onScroll);
                _.trigger();
            }
        }
    }

    $window.on('scroll', onScroll);
});

Trigger.registerEvent('exit', function bindExitEvent() {
    var _ = this,
        $ = _.cta.$,
        $document = $(document);

    function mouseLeave() {
        $document.off('mouseleave', mouseLeave);
        _.trigger();
    }

    $document.on('mouseleave', mouseLeave);
});

module.exports = CTA;
