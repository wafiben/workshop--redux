import React from "react";
import { useSelector } from "react-redux";
import CardStudent from "./CardStudent";

const ListStudents = () => {
  const students = useSelector((state) => state);
  console.log(students);
  return (
    <>
      {students.map((student, index) => (
        <CardStudent key={index} student={student} />
      ))}
    </>
  );
};

export default ListStudents;
