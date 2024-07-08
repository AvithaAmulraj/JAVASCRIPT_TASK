var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 3;

console.log( days[dayInWeek] );
console.log( days[dayInWeek - 1] );

var getDay = function(dayNumber) {
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    if (dayNumber >= 0 && dayNumber < days.length) {
        return days[dayNumber];
    } else {
        return "Invalid day number";
    }
};
console.log(getDay(4));