
  function PDFList(){


  //Normal function (to compare to arrow functions)
  
  var randFunction = function (a, b) {
    "use strict";
    var c = a + b;
    return c;
  };

  console.log("return function " + randFunction(3,4));

//arrow functions

const cars = ['Volvo', 'Toyota', 'Voltswagen', 'Nissan'];

console.log("Car.length " + cars.map(cars => cars.length));

let randFunction2 = name => {
  console.log("Hello " + name + "!");
};

randFunction2("Andrey");

//forEach

cars.forEach(element => console.log(element));

//filter

const result = cars.filter((_,index) => index % 2 === 0);
console.log("Filter function " + result)

//reducer
// Array, reduce. Has 4 parameters. Reducer function runs on each element of the array.
// In this case, the function is take previous value, and sum the curernt element to it
// the previous value is of course the sum of previous elements, or just the initial 0 element.

const numberArray =  [0, 1, 2, 3, 4];

const resultArray = numberArray.reduce( (previousValue, currentValue, currentIndex, array) => previousValue + currentValue )

console.log("Resulting array from running the reducer " +resultArray);
console.log("It's not actually an array cause it's been reduced! Haha")

//classes

class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log("Polygon area " + new Polygon(10, 5).area);

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}

console.log("Square area " + new Square(10).area);

// template literals

let literalsA = 5;
let literalsB = 10;
console.log(`Fifteen is ${literalsA + literalsB} and
not ${2 * literalsA + literalsB}.`);

// spread syntax
// when all elements of an array need to be included in a list, for example as parameters

function multiply(x, y, z) {
  return x * y * z;
}

const numbers = [1, 2, 3];

console.log(multiply(...numbers));



// imported functions

console.log(exportedFunction("Not Andrey"));
console.log(exportedFunction2("Not Andrey"));


  // trailing comma
  var trailing = [
    1,
    2,
    3,
  ];

  // property accessors
  
  const person = {firstname: "Greatest", lastname: "Ever",};
  console.log(person['firstname']);

  // computed names

  let i = 0
  let people = {
    ['person' + ++i]: i,
    ['person' + ++i]: i,
    ['person' + ++i]: i
  }

  console.log(people.person1) // 1
  console.log(people.person2) // 1

  // default parameters

  function defaultMultiply(a, b = 2) {
    return a * b;
  }

  console.log(defaultMultiply(5));
  console.log(defaultMultiply(5,3));

  // falsy values
  // null, undefined, false, 0, -0, NaN

  // short notation object literals

  let firsta = 'foo', firstb = 42, firstc = {};
  let o = {firsta, firstb, firstc};

  console.dir(o);

  //IIFE function 1

  (() => {
    return console.log(42);
  })(); 

  //IIFE function 2

  (abc => console.log(43))();

  // New way of defining methods

  const obj = {
    goal() {
      return "Goal";
    },
    score() {
      return "Score";
    }
  }

  console.log(obj.goal());
  console.log(obj.score());


  // Creating an example product
  let title = "Product title";
  let price = 12.22;
  let dateAdded = "12/07/2018";
  let pcs = 12;



  let product = {title, price, dateAdded, pcs};


  console.log("product: ");
  console.dir(product);

  let product2 = {...product};

  product2.title= "Product2";  
  product2.price= 15;  
  product2.dateAdded = "9/03/2021";

  console.log("product: ");
  console.dir(product2);

  //Destructuring product1

  {

    const {
        title,
        price,
        dateAdded,
        pcs
        //xyz, // This went through in Firefox, but will get value: undefined
     } = product;  // Destructure the object a to each const !!!
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring

    console.log("title: " + title);  // Prints from local const abc
    // abc++;   // This would be an error, cannot change const abc


}

  // Arrays and object references

  let g = ['Volvo', 'Toyota', 'Voltswagen', 'Nissan'];
  let j3 = [...g, g]; 

  console.log("j3 " + j3);
  g[1] = 222;
  console.log("j3 change due to g change " + j3);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }

  export default PDFList;