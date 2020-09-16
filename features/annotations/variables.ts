let apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();

// array

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes
class Car {}

let car: Car = new Car();

// object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
// void refers to what the function is returning
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
//1) function that returns the 'any' type

const json = '{"X": 10, "Y": 20}';
// JSON.parse can't predict what type we get returned so ts defaults to the 'any' type
// any is a type just as 'string' or 'boolean'
// avoid variables with any at all costs - ts can't help when it doesn't know what type you want

const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

//2 when we declare a variable on one line
// and initilaise it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3) variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
