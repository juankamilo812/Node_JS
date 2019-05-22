
//new Date()
//new Date() creates a new date object with the current date and time:
var d = new Date();
console.log(d);

//new Date(year, month, ...)
//new Date(year, month, day, hours, minutes, seconds, milliseconds)
//January is 0. December is 11.
//6 numbers specify year, month, day, hour, minute, second:
//5 numbers specify year, month, day, hour, and minute:
//4 numbers specify year, month, day, and hour:
//3 numbers specify year, month, and day:
//2 numbers specify year and month:
//You cannot omit month. If you supply only one parameter it will be treated as milliseconds.


var f = (new Date(2018, 11, 24, 10, 33, 30, 0)).toString();
console.log(f);

var e = new Date(2019, 02, 03).toString();
console.log(e);

var l = new Date(2019).toString();
console.log(l);


//new Date(dateString)

var d = new Date("October 13, 2019 11:13:00").toString();
console.log("La cadena de  fecha es " + d);


//new Date(milliseconds) creates a new date object as zero time plus milliseconds:
var a = new Date(0).toString();
console.log(a);

//The toUTCString() method converts a date to a UTC string (a date display standard).
var u = new Date().toUTCString();
console.log(u);

//The toDateString() method converts a date to a more readable format

var p = new Date().toDateString();
console.log(p);

//JavaScript Short Dates.
//Short dates are written with an "MM/DD/YYYY" syntax like this:

var m = new Date("03/25/2015").toString();
console.log(m);

//Date Input - Parsing Dates
//If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

var test = Date.parse("March 21, 2012");
console.log(test);

//You can then use the number of milliseconds to convert it to a date object:
var msec = Date.parse("March 21, 2012");
var ms = new Date(msec);
console.log(ms);

//The getTime() method returns the number of milliseconds since January 1, 1970:
var pa = new Date();
console.log("El dia es " + pa.getTime());

//The getFullYear() method returns the year of a date as a four digit number:

var pe = new Date();
console.log("El año es " + pe.getFullYear());

//The getMonth() method returns the month of a date as a number (0-11):
var pi = new Date();
console.log("El mes es " + pe.getMonth());

//You can use an array of names, and getMonth() to return the month as a name:

var po = new Date();
var date = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(date[po.getMonth()]);

//The getDate() method returns the day of a date as a number (1-31):
var pu = new Date();
console.log("El dia es " + pu.getDate());

//The getHours() method returns the hours of a date as a number (0-23):

var pm = new Date();
console.log("La hora es " + pm.getHours());

//The getMinutes() method returns the minutes of a date as a number (0-59):
var pl = new Date();
console.log("El minuto es " + pl.getMinutes());

//The getSeconds() method returns the seconds of a date as a number (0-59):

var pz = new Date();
console.log("El segundo es " + pz.getSeconds());

//The getMilliseconds() method returns the milliseconds of a date as a number (0-999):
var pv = new Date();
console.log("El milisegundo es " + pv.getMilliseconds());

//The getDay() method returns the weekday of a date as a number (0-6):
var pw = new Date();
console.log("El dia es " + pw.getUTCDate());

//You can use an array of names, and getDay() to return the weekday as a name:
var dm = new Date();
var dl = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(dl[dm.getDate()]);

//The setFullYear() method sets the year of a date object. In this example to 2020:
var la = new Date();
la.setFullYear(2021);
console.log(la);

var le = new Date();
le.setFullYear(2021, 01, 02);
console.log(le.toString());

//The setMonth() method sets the month of a date object (0-11):
var li = new Date();
li.setMonth(08);
console.log(li.toString());

//The setDate() method sets the day of a date object (1-31):
var lo = new Date();
lo.setDate(26);
console.log(lo);

//The setDate() method can also be used to add days to a date:

var lu = new Date();
lu.setDate(lu.getDate() + 5);
console.log(lu);

//The setHours() Method
var lz = new Date();
lz.setHours(23);
console.log(lz.toString());

//The setMinutes() method sets the minutes of a date object (0-59):
var lw = new Date();
lw.setMinutes(04);
console.log(lw.toString());


//The setSeconds() method sets the seconds of a date object (0-59):
var lv = new Date();
lv.setSeconds(42);
console.log(lv.toString());

var today1, someday2, text;
today1 = new Date();
someday2 = new Date();
someday2.setFullYear(2019, 2, 29);

//The following example compares today's date with January 14, 2100:

var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2019, 2, 30);

if (someday > today) {
    text = "Today is before March 14, 2019.";
} else {
    text = "Today is after March 14, 2019.";
}
console.log(text);

