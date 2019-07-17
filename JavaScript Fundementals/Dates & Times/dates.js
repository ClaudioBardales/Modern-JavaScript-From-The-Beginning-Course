let val;

const today = new Date();
let birthday = new Date("5-19-1993 11:30:00")
birthday = new Date("May 19 1993")
birthday = new Date('5/19/1993')


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(4);
birthday.setFullYear(1974)
birthday.setHours(69);
birthday.setMinutes(69);
birthday.setMilliseconds(69)

console.log(birthday);