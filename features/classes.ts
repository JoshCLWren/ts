// Classes - blueprint to create an object with some fields and methods
class Vehicle {
  constructor(public color: string) {}
  // public drive(): void {
  //   console.log('chugga chugga');
  // }
  private honk(): void {
    console.log('beep!');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
//inheritance... Car inherites from the superclass Vehicle
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, 'red');

car.startDrivingProcess();

// modifiers public, private, protected default is pubilc

// public : this method can be called any where any time

// private this method can only be called by other methods in this class. DOES NOT ADD SECURITY. Prevents other devs to call a method

//protected: this method can be called by other methods in this class. or by other methods in child classes
