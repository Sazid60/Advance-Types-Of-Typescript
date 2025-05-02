{
  //
  // generics type
  const rollNumbers: number[] = [2, 4, 5, 6];

  const mentors: string[] = ["x", "y", "z"];

  const boolArray: boolean[] = [true, false, true];

  //   we can define the type using default Array type. this also do not make it cool reuseable
  const rollNumbers1: Array<number> = [2, 4, 5, 6];

  const mentors1: Array<string> = ["x", "y", "z"];

  const boolArray1: Array<boolean> = [true, false, true];

  //   each and every time we are defining the types. we can make it cool dynamic reuseable type using generics

  type GenericArray = Array<string>;
  //    this the concept we can use to make it generics
  const mentors3: Array<string> = ["x", "y", "z"];
  //  we can put anything inside Array<string>. Booommmmmmmmmmmm! This is it we can make it dynamic

  type GenericArray1<T> = Array<T>;
  //   we can accept Type T like params Of Functions and use inside Array<T>

  //   _________________________________________
  // function example
  const add = (x: number, y: number) => x + y;

  add(30, 50);
  // ___________________________________________

  //   done and dusted bro Generic is the same concept and we have done it.
  const rollNumbers2: GenericArray1<number> = [2, 4, 5, 6];

  const mentors2: GenericArray1<string> = ["x", "y", "z"];

  const boolArray2: GenericArray1<boolean> = [true, false, true];
  // Woooooooooooooooooooooooooooooooooooooooooooooooooo! Its done the generics can take anything now!

  const user: GenericArray1<object> = [
    { name: "sazid", age: 20 },
    { name: "Pazid", age: "20" },
    {
      role: "Admin",
    },
  ];

  //    writing Generalized Object Is Not Right since we have values to check the types

  //   so we have to tell more specifically so the inside the array the objects property gets type checked
  const user1: GenericArray1<{ name: string; age: number }> = [
    { name: "sazid", age: 20 },
    { name: "Pazid", age: 20 },
  ];

  //    Generic Tuple

  const manush: [string, string] = ["Mr.X", "Mrs.Y"];
  //    this is not generalized, to make it generalized and dynamic reuseable we have to take sahara of Generics

  type GenericTuple<X, Y> = [X, Y];
  const Omanush: GenericTuple<string, string> = ["Mr.X", "Mrs.Y"];

  const UserID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Sazziiiiiid", email: "a@gmail.com" },
  ];
  //
}
