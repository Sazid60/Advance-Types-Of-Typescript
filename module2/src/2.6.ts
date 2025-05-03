{
  //
  // constrains IN tYPESCRIPT
  type Student = {
    id: number;
    name: string;
    email: string;
  };
  const addCourseToStudent = <T extends Student>(student: T) => {
    const course = "Next Level Web Dev";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 123,
    name: "Sazid",
    email: "sazid@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 123,
    name: "Sazid",
    email: "sazid@gmail.com",
    finished: "BLWD",
  });
}
