let number = 0
let counter = 5
for(let i = 0; i < counter; i++) {

let answer = prompt("Please type a number", "00")

number += parseInt(answer)
}
console.log("The total number = "+ number);
console.log("The average of the total = "+ number/counter);

