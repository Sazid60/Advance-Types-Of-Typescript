{
  //
  // conditional Types
  type a1 = null;
  type b1 = undefined;

  type x = a1 extends null ? true : false; // conditional type since x type depends on a1 type
  //   here x = true null can extend null
  // id type a1 = number it will be false

  // nested conditional type
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Shake = {
    bike: string;
    car: string;
    ship: string;
    plane: "plane";
  };

  type CheckVehicle<T> = T extends keyof Shake ? true : false;

  type HasTractor = CheckVehicle<"tractor">;
  type HasCar = CheckVehicle<"car">;
  //
}
