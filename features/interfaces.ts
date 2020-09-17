// Interfaces + Classes = how we get really strong code reuse in TS

//interface > creates a new type, describing the property names and value types of an object
interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string; //interfaces can also have functions you need to declare the type of value it will return
}

const oldCivic = {
  //typescript deosn't care about extra info
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

let drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.suager} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
