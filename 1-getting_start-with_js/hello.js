var friendage = [20,22,25,28];
console.log(friendage);

console.log(friendage);
// .push korle ager veriable ar sathe last a push value add hobe 
friendage.push(20);
friendage.push(58);
// .length korle koto ta value ase seta show korbe
console.log(friendage.length);
// .pop korle last ar alement ta out hoye jabe 
friendage.pop();
console.log(friendage);

var tealine =['kalam', 'salam', 'jalil', 'rahmat'] ;
console.log(tealine);
// unshift korle kono akta array ar first a value add hobe ....
tealine.unshift('kamrul');
console.log(tealine);
// shift korle veriable ar first  ar value out hoye jabe ..
tealine.shift('nozrul');
console.log(tealine);

var part =tealine.slice(2);
console.log(part);