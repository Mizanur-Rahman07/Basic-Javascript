var business = 850;
var minister = 650;
var sochib = 750;

if( business > minister){
    if( business>sochib){
    console.log("Business is biggest");
    }
}else{
    if(minister > sochib){
    console.log("Minister is bigger");
    }
    else{
        console.log("Sochib is bigger");
    }
}

// ------------------------

var business = 850;
var minister = 650;
var sochib = 750;

var max = Math.max(business, minister, sochib)
console.log(max);