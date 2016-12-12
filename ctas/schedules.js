var CURRENT_TIMEZONE_OFFSET = new Date().getTimezoneOffset();

function pad(n) {
    return ('00' + n).slice(-2);
}

module.exports = {
    showBySchedule: function showBySchedule(schedules) {
        var _ = this,
            date, timeslot, time, timenow;

        if (!(schedules instanceof Array) && typeof schedules === 'object') schedules = Object.values(schedules);
        if (!schedules || !schedules.length) return true;

        for (var i = 0; i < schedules.length; i++) {
            timeslot = schedules[i];
            date = _.timeInRemoteZone(new Date());
            console.log(timeslot.day, date.getDay())

            if (parseInt(timeslot.day) !== date.getDay()) continue;
            if (timeslot.allDay) return true;

            time = parseInt(pad(date.getHours().toString()) + pad(date.getMinutes().toString()));

            if (parseInt(timeslot.start) <= time && time <= parseInt(timeslot.finish)) return true;
        }

        return false;
    },

    timeInRemoteZone: function timeInRemoteZone(date) {
        return new Date(date.getTime() + (CURRENT_TIMEZONE_OFFSET * 60000) - ((this.offset || 180 /* ADT */) * 60000));
    }
};
