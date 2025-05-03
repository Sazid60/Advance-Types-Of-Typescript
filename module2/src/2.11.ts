{
  //
  //   Utility Types
  //   pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;
  //    we are picking the type of the name property from the person
  type NameAge = Pick<Person, "name" | "age">;
  //   picking both name and age type from the person

  //    Omit Type

  type ContactInfo = Omit<Person, "name" | "age">;
  //   This means use the person type and skip the name and age

  //    Required Types
  // This Means we will take the types properties and make all of the required
  type PersonRequired = Required<Person>;

  //   Partial Types
  // Partial is Exactly opposite to required it makes all of them optional

  type PersonPartial = Partial<Person>;

  //    Readonly Type
  //  It like if we do not want to let the value change any time but it can be seen here readonly is used

  const person1: Person = {
    name: "Mr.XY",
    age: 200,
    contactNo: "01911",
  };

  //   person1.age = "MRS.ANU"
  //  by using this we can change the VALUE

  // here read only works
  type PersonReadOnly = Readonly<Person>;
  const person2: PersonReadOnly = {
    name: "Mr.XY",
    age: 200,
    contactNo: "01911",
  };
  // person2.name = "MRS.ANU"
  //  This will show Error

  //   Record Types
  //  if we want adding a key value pairs adds a dynamic type we will Use Record Type
  // The Record type is a utility type used to create objects with specific keys and value types. It's great when you want to dynamically define key-value pairs.
  type MyObj = {
    a: string;
    b: string;
  };

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    // c: "cc", // this will not allow to add c since type of c is not defined
  };

  //   record comes with the solution like that if we add any value the type will be defied dynamically
  type MyObj2 = Record<string, string>;
  //   Record<keys type, values type >;
  const MyObj2: MyObj2 = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  // Suppose we have an empty object and in further we will have data here. to type guard the data we will use Record
  //    We definitely know the keys of the object is always string and the values are uncertain so we will use the key value pair string, unknown
  const emptyObject: Record<string, unknown> = {};

  emptyObject.name = "Sazid";
  emptyObject.age = 27;
  emptyObject.isUser = true;
}
