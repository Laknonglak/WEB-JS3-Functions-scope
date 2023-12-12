//-------------------------------Declaration vs Expression functions----------------------//

//Declaration
function info(firstName){
  console.log('Hello ' + firstName);
}
info('Jack');


//Expression
const myInfo = function(firstName){
  console.log('Hello ' + firstName);
};
myInfo('Jill');



//----------------------------------hoisting----------------------------------------//
//hoisting functions
info1('Peter'); //Peter

function info1(firstName){
  console.log('Hello ' +  firstName);
}

//can not hoist with expression functions
myInfo1('Rose'); //Cannot access 'myInfo' before initialization

let myInfo1 = function(firstname){
  console.log('Hello ' + firstname);
};