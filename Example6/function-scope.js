//------------------------------------Global Scope---------------------------------//
// const globalVariable = "I am global";

// function exampleFunction() {
//   // Function Scope
//   const functionVariable = "I am in a function";
//   console.log(globalVariable); // Accessible here
//   console.log(functionVariable);
// }

// exampleFunction();
// console.log(globalVariable);
// console.log(functionVariable); // This would result in an error


// //---------------------------------Block Scope---------------------------------------//

// if (true) {
//   // Block Scope
//   const blockVariable = "I am in a block";
//   console.log(blockVariable); // Accessible here
//   console.log(globalVariable);
// }
//  console.log(globalVariable);
// console.log(blockVariable); // This would also result in an error


//-----------------------------------Scope------------------------------------------//
let books = 'all books'

function ReadingList() {

    let myBooks = true;
    let moreBooks = 'React';
    var favbooks = 'MongoDB';

    if(myBooks) {
        var firstBook = 'HTML';
        const secondBook = 'CSS';
        let thirdBook = 'JavaScript';
        console.log(secondBook);//CSS
        console.log (thirdBook); //JavaScript
        console.log(favbooks);
        console.log(moreBooks);

    }
    console.log (firstBook); //HTML
    // console.log (secondBook); //secondBook is not defined
    // console.log (thirdBook); //thirdBook is not defined
    console.log (moreBooks); //react
    console.log(books);
}

ReadingList();
// console.log(firstBook); //firstBook is not defined
// console.log(favbooks); //favbooks is not defined
console.log(books); //all books

//same name variable but difference scope will be differenc things

{
    let firstBook = 'HTML';
    let secondBook = 'CSS';
    console.log(firstBook);
}
{
    let firstBook = 'Harry Potter';
    console.log(firstBook);
}