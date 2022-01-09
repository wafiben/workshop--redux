import { add } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
function Add() {
  const dispatch = useDispatch();
  const [student, setStudent] = useState({
    id: " ",
    firstName: "",
    lastName: "",
  });
  const handleChange = (event) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    setStudent({ ...student, id: id, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(add(student));
    setStudent({id:"", firstName: "", lastName: "" });
  };
  return (
    <form
      className="container"
      style={{ width: "50%" }}
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          first name
        </label>
        <input
          value={student.firstName}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="firstName"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          last name
        </label>
        <input
          value={student.lastName}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="lastName"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Add;
