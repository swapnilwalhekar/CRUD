import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link><br/><br/>
      <h2>User id: {id}</h2><br/>
      <ul className="list-group w-50">
        <li className="list-group-item">User Name: {user.name}</li><br/>
        <li className="list-group-item">User Email: {user.email}</li><br/>
        <li className="list-group-item">User Phone: {user.phone}</li><br/>
        <li className="list-group-item">User Website: {user.website}</li>
      </ul>
    </div>
  );
};

export default ViewUser;
