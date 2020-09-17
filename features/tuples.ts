function fun() {
  // Tuples in ts
  // array-like structure where each element represents some proprety of a record

  const obj = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
  };

  const tupl = ['brown', true, 40];
  //looks like an array but it's in a fixed order for obj

  let drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
  };

  const pepsi: [string, boolean, number] = ['brown', true, 40];

  // type alias

  type Drink = [string, boolean, number];

  const sprite: Drink = ['clear', true, 40];
  const tea: Drink = ['brown', false, 20];

  // tuples are rare in the wild... might use them with csv files

  const carSpecs: [number, number] = [400, 3354]; // what do these numbers mean? doesn't stand out when we do tuples

  const carStats = {
    horsepower: 400,
    weight: 3354,
  }; // keys make it so much easier since they're more readable.
}
