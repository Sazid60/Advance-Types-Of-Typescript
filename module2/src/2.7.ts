{
  // constrains using Keyof

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  //    now we have desire to grab the keys of the type and make a union literal types
  //  we can make this manually
  type Owner = "bike" | "car" | "ship";

  //  but to make it more dynamic Using keyof

  type Owner2 = keyof Vehicle;
  //   it will show same result as union types

  const user = {
    name: "Sazid",
    age: 26,
    address: "CTG",
  };

  //    we can grab the data like
  user["age"]; // output : 26
  user.name; // output "Sazid"

  //    WE WANT TO DO IT USING FUNCTION AND MAKE IT DYNAMIC USING CONSTRAINS and GENERICS

  const getPropertyValues = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
    //  if we do not say explicitly it will show error since the any key can be send and it might show undefined. for this reason generics will be use d with constrains
  };

  const user2 = {
    name: "Sazid",
    age: 26,
    address: "CTG",
  };
  getPropertyValues(user2, "name");
  const car = {
    model: "OYOTA-100",
    year: 2026,
  };
  getPropertyValues(car, "model");
}
