var CURRENT_TIMEZONE_OFFSET = new Date().getTimezoneOffset();

function pad(n) {
    return ('00' + n).slice(-2);
}

module.exports = {
    showBySchedule: function showBySchedule(schedules) {
        var _ = this,
            date = new Date(new Date().getTime() + (CURRENT_TIMEZONE_OFFSET * 60 * 1000)),
            time = parseInt(pad(date.getHours().toString()) + pad(date.getMinutes().toString())),
            timeslot, timenow;

        if (!schedules) return false;
        if (!(schedules instanceof Array) && typeof schedules !== 'undefined') schedules = Object.values(schedules);

        for (var i = 0; i < schedules.length; i++) {
            timeslot = schedules[i];
            timeslot.finish = parseInt(timeslot.finish);
            timeslot.start = parseInt(timeslot.start);
            timeslot.day = parseInt(timeslot.day);

            if (timeslot.day === date.getDay() && timeslot.allDay) return true;

            if (
                timeslot.day === date.getDay() &&
                timeslot.start <= time &&
                timeslot.finish >= time
            ) return true;

            if (timeslot.start >= 2400 && timeslot.finish >= 2400) {
                if (
                    timeslot.day === date.getDay() - 1 &&
                    timeslot.start - 2400 <= time &&
                    timeslot.finish - 2400 >= time
                ) return true;
            } else if (timeslot.finish >= 2400) {
                if (time <= timeslot.finish - 2400 && timeslot.day === date.getDay() - 1) return true;
                if (time >= timeslot.start && timeslot.day === date.getDay()) return true;
            }
        }

        return false;
    }
};
