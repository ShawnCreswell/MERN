import React, { useState } from "react";
import axios from "axios";
export default () => {
  //keep track of what is being typed via useState hook
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new person
    axios
      .post("http://localhost:8000/api/people", {
        firstName,
        lastName,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  //onChange to update firstName and lastName
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header text-center">
          <h1>Create User</h1>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmitHandler}>
            <p>
              <label>First Name</label>
              <br />
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </p>
            <p>
              <label>Last Name</label>
              <br />
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </p>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
