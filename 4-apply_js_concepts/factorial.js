// var factorial = 1;
// for (var i = 1; i <= 50; i++) {
//     factorial = factorial * i
//     console.log(i, factorial);
// }

function factorial(n) {
    let fact = 1;
    for (var i = 1; i <= n; i++) {
        fact = fact * i;
        // console.log(i, factorial);
    }
    return fact;
}

let result = factorial(10);
console.log(result);


// ------------
// let mam =0;
// for(let i=0; i<=5; i++){
//     mam =mam+i;
//     console.log(mam)
// }