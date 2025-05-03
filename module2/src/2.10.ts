{
  // mapped types

  const arrayOfNumbers: number[] = [1, 2, 3];

  //   const arrayOfStrings : string[] = ["1","2","3"]
  //  we wil do it using js map
  const arrayOfStrings: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrayOfStrings);

  // ts map also do the same kind of thing almost

  type AreaNumber = {
    height: number;
    width: number;
  };
  //   if we want to manually convert types into string
  type AreaString1 = {
    height: string;
    width: string;
  };

  type AreaString = {
    // [key in "height" | "width"]: string;
    //this is also not dynamic, this is hardcoded so we can use key in key of  key in basically doing the looping like map
    [key in keyof AreaNumber]: string; // this is looping variable
    // key in the looping happens like  takes the height and convert to string and then takes the width and converts it into string
  };

  //  obj["height"] ---> this is called lookup
  //    if we want to use ts mapped types
  type Height = AreaNumber["height"]; // lookup is as same as object and this will give the type of height

  //    suppose the scenario is like i have a variable and we want to define custom types
  //   making flexible using generics

  // T=> {height:string, width:number}
  //   [key in "height"] : T[key]
  type AreaString2<T> = {
    // [key in keyof T]: string;
    // we do not want to make all of them string we want to keep multiple type thats why this will not work

    // T=> {height:string, width:number}
    // key=>"height", key=>"width"
    [key in keyof T]: T[key];
  };

  const area1: AreaString2<{ height: string; width: number }> = {
    height: "100",
    width: 400,
  };
}
