import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  // at the time of page load useEffect call initially
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
    // After deletion of data page is automaically reloaded
    // If loadUsers function is not called then page is not reloaded
  };

  return (
    <div className="container">
      <div className="py-4 m-2">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td style={{ margin: "center" }}>
                  <Link
                    className="btn btn-primary m-1"
                    to={`/users/view/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary m-1"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger m-1"
                    to=""
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
