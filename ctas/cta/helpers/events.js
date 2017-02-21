var Trigger = require('../trigger');

Trigger.registerEvent('scroll', function bindScrollEvent() {
    var _              = this,
        $window        = _.$(window),
        windowHeight   = _.$(window).height(),
        documentHeight = _.$(document).height(),
        isTag          = typeof _.scroll === 'string' && !/%|px/.test(_.scroll),
        isPercent      = typeof _.scroll === 'string' &&     /%/.test(_.scroll);

    function onScroll() {
        var scrollTop = $window.scrollTop();

        if (isTag) {
            var tagOffset = _.$(_.scroll).offset().top;

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
        $document = _.$(document);

    function mouseLeave() {
        $document.off('mouseleave', mouseLeave);
        _.trigger();
    }

    $document.on('mouseleave', mouseLeave);
});
