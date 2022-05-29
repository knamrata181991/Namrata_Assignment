import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Select from "react-select";
const Home = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    username: "",
    color: "",
    id: "",
  });
  const { username, id } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3003/users`, user);
    history.push(`/users/${id}`);
  };
  var colors = [
    { value: 1, label: "Red" },
    { value: 2, label: "Green" },
    { value: 3, label: "Blue" },
    { value: 4, label: "Pink" },
    { value: 5, label: "Orange" },
    { value: 6, label: "White" },
  ];
  var ddhandle = (e) => {
    setUser({ ...user, color: e.label });
  };
  return (
    <div className="container">
      <style>{"body {background-color:" + user.color + ";}"}</style>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your id"
              name="id"
              value={id}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <Select
              placeholder="Choose colour"
              options={colors}
              onChange={ddhandle}
            ></Select>
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
