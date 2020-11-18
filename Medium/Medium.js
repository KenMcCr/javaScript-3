// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));                                                 
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
//   // prints "Each person gets 2.67 slices of pizza"




function sharePizza(people) {
    var numSlices = 8;
    var slicesPerPerson = numSlices / people;
    return ' Each person gets ' + slicesPerPerson + " slices of pizza. ";

}
console.log(sharePizza(2));

function cutPizzaSlices(numSlices) {
    return function (people) {
        return 'Each person gets ' + numSlices / people + ' slices of pizza.';
    }
}
var sharePizza = cutPizzaSlices(8)
console.log(sharePizza(3));
