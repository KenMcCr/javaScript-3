// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

function excercise(cardio) {
    return `Today's excercise: ${cardio}`;
}
var run = excercise('running');
var swim = excercise('swimming');

console.log(run);
console.log(swim);