// Code your solution in this file


//returns the matching list of drivers. The function should be case insensitive.
function findMatching(drivers, string){
  return drivers.filter(function(name) {return name.toLowerCase() === string.toLowerCase()})
}

//returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, string){
  //const stringLength = string.length;
  return drivers.filter(function(name) {return name.substring(0,string.length) === string})
}

//each element of the `drivers` array is a JavaScript object that has a property of `name`
//return each element whose `name` property matches the provided `string` argument.
function matchName(drivers, string){
// <<<<<<< HEAD
// 
// =======
//   
// >>>>>>> ce592f23b1a9babd8979bb6191553398ca23f2d2
  return drivers.filter(function(thing) {return thing.name === string})
}
