// (init; condition; post-loop)
/*for(var i = 0; i <= 100; i+=2) {
   console.log(i);
}
*/
var countTo = prompt('how high should we count even numbers?');
var sure = confirm('are you sure you want to count to', countTo, "?")

if (sure) {
    for(var i = 0; i <= countTo; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }  
    }
 }