function place() {
    return 'place';
}
console.log(place());

function animal() {
    return function() {
    return 'animal';
   }
}
// This line of code is rarely seen
console.log(animal()())