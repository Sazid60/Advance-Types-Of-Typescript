{
  //
  // Interface
  //   using type (not using interface)
  type User1 = {
    name: string;
    age: number;
  };
  const user1: User1 = {
    name: "Sazid",
    age: 12,
  };

  //    same thing can be done using interface. we can declare type using interface as well
  interface User2 {
    name: string;
    age: number;
  }

  const user2: User2 = {
    name: "Sazid",
    age: 12,
  };

  //   difference between type And interface
  type rollNumber = number;
  //    we can not use interface here

  //   extending using type
  //   If we want to extend a property using type alias we use intersection "&"

  type UserWithRole1 = User1 & { role: string };

  const user3: UserWithRole1 = {
    name: "Persian",
    age: 29,
    role: "Manager",
  };

  //    extending using interface
  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user4: UserWithRole2 = {
    name: "Persian",
    age: 29,
    role: "Manager",
  };

  //   We Can extend Type and make Interface as well

  interface UserWithRole3 extends User1 {
    role: string;
  }

  const user5: UserWithRole2 = {
    name: "Persian",
    age: 29,
    role: "Manager",
  };

  //   - Declaring array using interface
  // - We know in js object is object and array is also a object, function ias also a kind of object
  // - so we can use interface for array, object and function as well

  type Roll1 = number[];

  const rollNumber1: Roll1 = [1, 2, 3, 4];

  //   ________________________ 0, 1, 2, 3 --> number type index holding number type data

  //   using interface
  interface Roll2 {
    [index: number]: number;
    //number type index holding number type data
  }

  const rollNumber2: Roll2 = [1, 2, 3, 4];

  //   Interface In Function
  type Add1 = (num1: number, num2: number) => number;

  const add1: Add1 = (num1, num2) => num1 + num2;

  //    using interface

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;
  //
}
