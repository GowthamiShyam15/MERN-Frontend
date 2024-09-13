import React, { useState } from "react";
import "./AddUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddUser = () => {
  // step-2
  const users = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  // step-3
  const [user, setUser] = useState(users);

  //step-8
  const navigate = useNavigate()

  // step-1
  const inputHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);

    // step-4
    setUser({ ...user, [name]: value });
    // console.log(user)
  };
  // step-5
  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("https://mern-backend-ud4j.onrender.com/user/create", user)
      .then((response) => {
        // console.log(response);
        //step-7
        toast.success(response.data.message,{position:"top-right"})
        //step-9
        navigate("/")
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="addUser">
      <Link to={"/"}>Back</Link>
      <h3>Add New User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input type="text" onChange={inputHandler} id="fname" name="fname" autoComplete="off" placeholder="First Name"/>
        </div>

        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input type="text" onChange={inputHandler} id="lname" name="lname" autoComplete="off" placeholder="Last Name"/>
        </div>

        <div className="inputGroup">
          <label htmlFor="fname">Email</label>
          <input type="email" onChange={inputHandler} id="email" name="email" autoComplete="off" placeholder="Email"/>
        </div>

        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input type="password" onChange={inputHandler} id="password" name="password" autoComplete="off" placeholder="Password"/>
        </div>
        <div className="inputGroup">
          <button type="submit">ADD USER</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
