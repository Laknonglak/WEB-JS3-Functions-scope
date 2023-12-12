//-----------------------------------Name Function----------------------------//
// function handleClick() {
//     console.log('Button clicked! NAME FUNCTION');
// }

// document.getElementById('myButton').addEventListener('click', handleClick);


//----------------------------------Anonymous Function-------------------------//
// An event listener using an anonymous function
// document.getElementById('myButton').addEventListener('click', function() {
//     console.log('Button clicked! ANONYMOUS FUNCTION');
// });


//-----------------------------------Arrow Fuction---------------------------//
// const handleClick = () => {
//     console.log('Button clicked! ARROW FUCNTION');
// };

// document.getElementById('myButton').addEventListener('click', handleClick);

//-----------------------------------Anonymous Function----------------------//
document.getElementById('myButton').addEventListener('click', () => {
    console.log('Button clicked! ARROW ANONYMOUS FUNCTION!');
});

//------------------------------------Use Case-----------------------------//
//Callback Functions:
// Array method - forEach, map
const numbers = [1, 2, 3];
numbers.forEach(function(number) {
    console.log(number);
});

//Event Handling:
document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button clicked!');
});



