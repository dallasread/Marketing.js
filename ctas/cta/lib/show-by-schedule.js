/*
    Given a schedule, is it available in my time zone?
*/

function pad(n) {
    return ('00' + n).slice(-2);
}

function objValues(obj) {
    return Object.keys(obj).map(function(i) {
        return obj[i];
    });
}

function timeInZone(date, offset) {
    var d = new Date(date || new Date()),
        utc = d.getTime() + (d.getTimezoneOffset() * 60000),
        nd = new Date(utc + (3600000 * offset));

    return nd.toLocaleString();
}

function timeInt(localeDateString) {
    var splat = localeDateString.match(/(\d+):(\d+)/),
        hours = parseInt(splat[1]);

    if (localeDateString.indexOf('PM') !== -1) {
        hours += 12;
    }

    return parseInt(pad(hours) + pad(splat[2]));
}

function showBySchedule(schedules, offset, now) {
    if (!schedules) return false;
    if (!(schedules instanceof Array) && typeof schedules !== 'undefined') schedules = objValues(schedules);

    now = new Date(now || new Date());
    offset = parseInt(offset) || 0;

    var localeDateString = timeInZone(now, offset),
        time = timeInt(localeDateString),
        day = new Date(now.getTime() + (offset * -1000)),
        timeslot;

    for (var i = 0; i < schedules.length; i++) {
        timeslot = schedules[i];

        if (time < parseInt(timeslot.start)) continue;
        if (time > parseInt(timeslot.finish)) continue;
        if (day.getDay() !== parseInt(timeslot.day)) continue;

        return true;
    }

    return false;
}

module.exports = showBySchedule;
