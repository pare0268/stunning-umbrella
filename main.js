function getDayOfWeek() {
    const daysWeek =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDate();
    return daysOfWeek[today];
}
console.log(getDayOfWeek());
//the answer is thursday


function getFormattedDate() {
    const options = { year: "numeric", month: "long", day: "numeric",
    weekday: "long"  };
    return Date.tolocaleDateString("en-US", options);
}
console.log(getFormattedDate(new Date()));
// this show the date in the format example: Thursday, September 17, 2020 in en-US zone time


//Create a variable fullName and store your full name as a string. Display the length of your name in the console

let fullName + "Adesh Shah";

console.log(fullName.length - 1);


// write a function square that takes a number as an argument and return its square.

let num = 5
function square(num) {
    return Math.pow(num, 2);
}
console.log(fullName.length - 1);
