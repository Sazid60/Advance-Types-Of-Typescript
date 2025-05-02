{
  //
  //   type assertion
  //   Type assertion : as a developer if we know more than typescript or we can declare better types that typescript that scenario is called type assertion.

  let anything: any;
  anything = "Next Level Web Development";

  //   anything. // if we press . and space it will give us the string related suggestion
  // we know string is defined inside anything so we can specifically say that its a string. this is type assertion

  (anything as string).includes("a");
  // after type assertion typescript will understand its a string and will show the string methods after pressing . and space

  anything = 222;

  (anything as number).toFixed(0);

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The Converted Value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  //   its showing the output could be number string or undefined but as a developer we know we are sending number it will return us number so here we call specifically say that it will return number
  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;
  //    when we use as ts believes us blindly

  // we can create type and use as type assertion

  //  as we are sure error contains a message type property we can declare a type
  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    //     We are using TypeScript's type assertion to tell the compiler:"Trust me, error is of type CustomError (an object with a message string)."
    console.log((error as CustomError).message);
  }
  //
}
