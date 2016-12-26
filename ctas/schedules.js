var CURRENT_TIMEZONE_OFFSET = new Date().getTimezoneOffset();

function pad(n) {
    return ('00' + n).slice(-2);
}

function objValues(obj) {
    return Object.keys(obj).map(function(i) {
        return obj[i];
    });
}

var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
function getUTCDay(date) {
    var str = date.toUTCString();

    for (var i = 0; i < DAYS.length; i++) {
        if (str.indexOf(DAYS[i]) !== -1) return i;
    }
}

function addOffset(date) {
    return new Date(new Date().getTime() + (CURRENT_TIMEZONE_OFFSET * 60 * 1000));
}

function showBySchedule(schedules, now) {
    if (!schedules) return false;
    if (!(schedules instanceof Array) && typeof schedules !== 'undefined') schedules = objValues(schedules);

    now = new Date(now);

    var nowHourMinute = parseInt(pad(now.getUTCHours()) + pad(now.getUTCMinutes())),
        start, finish;

    for (var i = 0; i < schedules.length; i++) {
        timeslot = schedules[i];

        if (parseInt(timeslot.start) >= 2400) {
            nowHourMinute = parseInt(pad(now.getUTCHours() + 24) + pad(now.getUTCMinutes() + 24));
        }

        if (parseInt(timeslot.start) >= 2400) {
            if (getUTCDay(now) !== parseInt(timeslot.day) + 1) continue;
        } else {
            if (getUTCDay(now) !== parseInt(timeslot.day)) continue;
        }

        if (nowHourMinute < parseInt(timeslot.start)) continue;
        if (nowHourMinute > parseInt(timeslot.finish)) continue;

        return true;
    }

    return false;
}

module.exports = {
    showBySchedule: showBySchedule
};

if (!module.parent) {
    console.log(
        showBySchedule([
            { day: 6, start: 2300, finish: 2700 },
        ], 'Sat Dec 24 2016 23:35:47 GMT-0000 (UTC)') ? '√' : 'x',
        'Inside of Schedules'
    );

    console.log(
        !showBySchedule([
            { day: 6, start: 2500, finish: 2700 },
            { day: 0, start: 2500, finish: 2700 }
        ], 'Sat Dec 24 2016 11:35:47 GMT-0400 (AST)') ? '√' : 'x',
        'Outside of Times'
    );

    console.log(
        !showBySchedule([
            { day: 4, start: 0, finish: 2000 },
        ], 'Mon Dec 26 2016 11:35:47 GMT-0400 (AST)') ? '√' : 'x',
        'Outside of Days'
    );

    console.log(
        showBySchedule([
            { day: 2, start: 400, finish: 1600 }
        ], 'Tue Dec 27 2016 8:35:47 GMT-0400 (AST)') ? '√' : 'x',
        'Inside of Days'
    );

    console.log(
        showBySchedule([
            { day: 2, start: 2500, finish: 2600 }
        ], 'Wed Dec 28 2016 1:35:47 GMT-0000 (UTC)') ? '√' : 'x',
        'Works'
    );
}
