// // math.floor use korle purno number ar por jai thak seta dakhabe na .seta purnp number ai asbe
// var num = 2.9999999;
// var result = Math.floor(num);
// console.log(result);
// // ----------------------

// // math.ceil use korle purno number ar porer dosomik number gulo k 1 hisab a dhorbe
// var num = 2.33333;
// var result2 = Math.ceil(num);
// console.log(result2);
// // -----------------------

// // math. round use korle purno number ar sathe j dosomik songkha thakbe seta half ar bashi hole 2 theka 3 hoye jabe ,,, 
// // r half ar kom hole seta purno songkhai thakbe .dosomik ar value thakbena / ex 2
// var num = 2.4444;
// var result3 = Math.round(num);
// console.log(result3);
// ---------------------------

//------------------- lotary kora jay
var num = 4;
var dice = Math.random()*4;
var output = Math.round(dice);
console.log(output);
// -------------

// r o valo upay lotary ar ----------
for (var i = 1; i<=3; i++){
    var randomNum = Math.random() * 4;
    var output = Math.round(randomNum);
    console.log(output);
}