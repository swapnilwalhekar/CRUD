import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 m-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <h5>Edit Name</h5>
            <input
              type="text"
              className="form-control "
              name="name"
              autoComplete="off"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <h5>Edit UserName</h5>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <h5>Edit Email</h5>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              autoComplete="off"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <div className="form-group">
            <h5>Edit Phone Number</h5>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <div className="form-group">
            <h5>Edit Website</h5>
            <input
              type="text"
              className="form-control"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div><br/>
          <button className="btn btn-warning" type="submit">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
