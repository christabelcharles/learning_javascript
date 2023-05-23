/*
setTimeout(function()  {
    console.log('i waited 4 seconds before the code was executed');
}, 4000);
*/
/*
let counter = 1
function timeout() {
    setTimeout(function()  {
        console.log('kadosh' +'! ' + counter++ );
        timeout()
    }, 3000);
}

timeout();
*/

(function()  {
    console.log('immediately invoked function expression (IIFE)');
})();

