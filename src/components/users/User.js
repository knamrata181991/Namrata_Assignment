import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    username: "",
    color: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);

  };

  const loadUser = async () => {
    const userName = id;
    const res = await axios.get(`http://localhost:3003/users/${userName}`);
    setUser(res.data);
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
      <div className="container py-4">
        <style>{"body {background-color:" + user.color + ";}"}</style>
        <Link className="btn btn-primary" to="/">
          Back to Login
        </Link>
        <h1 className="display-4">Welcome {user.username}</h1>
      </div>
      <style>{"body {background-color:" + user.color + ";}"}</style>
      <div className="w-75 mx-auto shadow p-5">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <Select
              placeholder="Change colour"
              options={colors}
              onChange={ddhandle}
            ></Select>
          </div>

          <button className="btn btn-primary btn-block">Save</button>
        </form>
      </div>
    </div>
  );
};

export default User;
