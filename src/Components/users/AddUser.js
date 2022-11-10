import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });
  const navigate = useNavigate();
  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    // console.log([e.target.name]);
    // console.log(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    navigate("/");
  };

  return (
    <div className="container">
      <h2 className="text-center">Add A User</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <h5 className="form-h5">Enter Name </h5>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name} 
            autoComplete="off"
            onChange={(e) => onInputChange(e)}
          />
        </div>    
        <div className="mb-3">
          <h5 className="form-h5">Enter User Name </h5>
          <input
            type="text"
            className="form-control"
            name="username"
            autoComplete="off"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <h5 className="form-h5">Enter Email</h5>
          <input
            type="email"
            className="form-control"
            name="email"
            autoComplete="off"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <h5 className="form-h5">Enter Contact no. </h5>
          <input
            type="text"
            className="form-control"
            name="phone"
            autoComplete="off"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <h5 className="form-h5">Website </h5>
          <input
            type="text"
            className="form-control"
            name="website"
            value={website}
            autoComplete="off"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add User Info
        </button>
      </form>
    </div>
  );
}

export default AddUser;
