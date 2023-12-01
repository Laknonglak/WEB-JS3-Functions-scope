//---------------------------------Return ---------------------------------//
function add(a, b) {
  return a + b; // Returns the sum of a and b
}

const result = add(10, 55); // Calls the function and assigns its return value (65) to 'result'
console.log(result); // Outputs: 65




//----------------------------Return then do thing else--------------------//
function calculateTax(income) {
  const taxRate = 0.2; // 20% tax rate
  const taxAmount = income * taxRate;
  console.log(taxAmount)
  return taxAmount;
}

const salary = 50000;
const taxToPay = calculateTax(salary);
console.log(taxToPay)

console.log(`Your salary is ${salary}, and you need to pay ${taxToPay} in taxes.`);

const remainingIncome = salary - taxToPay;
console.log(`After paying taxes, your remaining income is ${remainingIncome}.`);




//---------------------------------function default parameter-------------------------------//
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("Jack"); // Outputs: Hello, Jack!
greet(); // Outputs: Hello, Guest!




//--------------------------------Fewer Arguments than Parameters-----------------------------//
function greet1(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet1("Jill"); // Outputs: Hello, Jack! You are undefined years old.



//----------------------------------More Arguments than Parameters----------------------------//
function greet2(name) {
  console.log(`Hello, ${name}!`);
}

greet2("Jill", 25); // Outputs: Hello, Jill!
