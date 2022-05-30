var num = 2.9999999;
var result = Math.floor(num);
console.log(result);

var num = 2.33333;
var result2 = Math.ceil(num);
console.log(result2);

var num = 2.4444;
var result3 = Math.round(num);
console.log(result3);

var num = 2.888;
var dice = Math.random()*10;
console.log(dice);

for (var i = 0; i<10; i++){
    var randomNum = Math.random() * 6;
    var output = Math.round(randomNum);
    console.log(output);
}