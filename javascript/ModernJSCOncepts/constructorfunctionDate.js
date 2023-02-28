console.log("---------Om------");
console.log("----------constructor function date------");

const currentDate=new Date();
console.log(currentDate);
console.log(currentDate.getMonth());
console.log(currentDate.getSeconds());
console.log(typeof(currentDate));

console.log("--------string-format-------------");
let newDate=new Date("02/27/2023");
console.log(newDate.getMinutes());