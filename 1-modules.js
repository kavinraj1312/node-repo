const name=require('./names.js');
const sayHi=require('./func.js');
const alter=require('./alternative.js');
require('./add.js');
const array=alter.item;
console.log(array);
console.log(alter.list);

sayHi(name.kavin);
sayHi(name.raj);

