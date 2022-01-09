import React, { useState } from "react";
import { deleteStudent ,update } from "../Redux/Actions";
import { useDispatch } from "react-redux";
const CardStudent = ({ student }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteStudent(student.id));
  };
  const [show, setShow] = useState(false);
  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };
  const [updatedStudent,setupdatedStudent]=useState({firstName:' ',lastName:''})
  const handleChange=(event)=>{
    setupdatedStudent({...updatedStudent,[event.target.id]:event.target.value})
  }
  const handleSubmit = (event) => {
      event.preventDefault();
    dispatch(update(student.id,updatedStudent))
  };
  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">{student.firstName}</h5>
        <p class="card-text">{student.lastName}</p>
        <button type="button" className="btn btn-danger" onClick={handleClick}>
          delete
        </button>
        <button type="button" className="btn btn-primary" onClick={handleShow}>
          Update
        </button>
         {show && (
          <form
            className="container"
            style={{ width: "50%" }}
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                first name
              </label>
              <input onChange={handleChange}
                
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
        )} 
      </div>
    </div>
  );
};

export default CardStudent;
