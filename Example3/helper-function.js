// Helper function to check if a number is positive
  function isPositive(number) {
    return number > 0;
  }

  // Function that uses the helper function to check if two numbers are positive
  function checkNumbers(a, b) {
    if (isPositive(a) && isPositive(b)) {
      console.log(`${a} and ${b} are both positive.`);
    } else {
      console.log(`${a} and/or ${b} are not both positive.`);
    }
  }

  const num1 = 7;
  const num2 = -3;

  checkNumbers(num1, num2);


  //------------------------------Anonymous Function -------------------------//
  // An event listener using an anonymous function
    document.getElementById('myButton').addEventListener('click', function() {
      console.log('Button clicked!');
    });

    function handleClick() {
      console.log('Button clicked!');
   }
  
    document.getElementById('myButton').addEventListener('click', handleClick);
    