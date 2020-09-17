// const carMakers = ['ford', 'toyota', 'chevy'];
// const dates = [new Date(), new Date()];

// const carsByMake: string[][] = [];

// // help with inference when extracting values

// const car = carMakers[0]; // ts knows it's expecting strings

// const myCar = carMakers.pop();

// // prevent incompatible values

// carMakers.push(100); // ts expects only strings here

// // help with map

// carMakers.map((car: string): string => {
//   return car.toUpperCase();
// });

// // different types of values can still be in arrays..

// const imporantDates: (Date | string)[] = [new Date(), '2030-10-10'];

// imporantDates.push('2020-12-1');
// imporantDates.push(new Date());

// // Tuples in TS
// // array like structure
