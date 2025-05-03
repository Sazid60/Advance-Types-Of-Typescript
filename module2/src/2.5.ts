{
  //
  // Function With  Generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  //  This is not dynamic so we can make it dynamic by using generics with functions

  //   <received type>(param: used received type): return type[]
  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };
  type User = {
    id: number;
    name: string;
  };
  const res2 = createArrayWithGenerics<string>("Bangladesh");
  const res3 = createArrayWithGenerics<User>({ id: 222, name: "Nissso" });

  //  here createArrayWithGenerics is inhering the types still we can explicitly define the type

  //    creating a tuple using generic function
  const createTupleWithGeneric = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
  };

  const res4 = createTupleWithGeneric<string, number>("Bangladesh", 1);
  const res5 = createTupleWithGeneric<number, User>(123, {
    id: 222,
    name: "Nissso",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Dev";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    name: "Sazid",
    email: "sazid@gmail.com",
    devType: "NLWD",
  }); // addCourseToStudent Is AUTOMATICALLY Inferring the types though we can explicitly define
  const student2 = addCourseToStudent({
    name: "Kazid",
    email: "kazid@gmail.com",
    hasWatch: "Apple",
  });
  //
}
