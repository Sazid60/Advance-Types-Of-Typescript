{
  //
  //   Asynchronous Typescript
  //   promise

  const createPromise = (): Promise<string> => {
    // 2. as it will return string we will tell that the return type will be a Promise String as well
    return new Promise<string>((resolve, reject) => {
      // 1. As we know if it is resolved it will return string we can tell it Promise<string>
      const data: string = "something";

      if (data) {
        resolve(data);
      } else {
        reject("Failed To Load Data");
      }
    });
  };
  //    calling createPromise Function

  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    console.log(data);
    return data;
  };

  showData();

  //   another example

  type Something = { something: string };

  const createPromise1 = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "Something" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed To Load Data");
      }
    });
  };

  const showData1 = async (): Promise<Something> => {
    const data: Something = await createPromise1();
    console.log(data);
    return data;
  };

  showData1();

  // now we are are going to fetch real time data
  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };
  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    // console.log(data);
    return data;
  };

  getTodo();
  //
}
