import React, { useEffect, useState } from 'react'
import '../AddUser/AddUser.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const UpdateUser = () => {
  //step-2:
  const users = {
    fname: "",
    lname: "",
    email: "",
  };

  //step-1
  const {id} = useParams();
  const [user, setUser] = useState(users);

  const navigate = useNavigate()

  //step-3:
  const inputChangeHandler = (e)=>{
    const {name, value} = e.target
    setUser({...user, [name]:value})
    console.log(user)
}
// step-4:
useEffect(()=>{
    axios.put(`https://mern-backend-ud4j.onrender.com//user/update/${id}`)
    .then((response)=>{
        // console.log(response);
        //step-5
        setUser(response.data)
        
    })
    .catch((error)=>{
        console.log(error);
    })
},[id])

//step - 6:
const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`https://mern-backend-ud4j.onrender.com//user/update/${id}`, user)
      .then((response) => {
        // console.log(response);
        //step-7
        toast.success(response.data.message, { position: "top-right" });
        //step-9
        navigate("/");
      })
      .catch((error) => console.log(error));
}
  return (
    <div className="addUser">
      <Link to={"/"}>Back</Link>
      <h3>Update User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text" value={user.fname} onChange={inputChangeHandler}
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="First Name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text" value={user.lname} onChange={inputChangeHandler}
            id="lname"
            name="lname"
            autoComplete="off"
            placeholder="Last Name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="fname">Email</label>
          <input
            type="email" value={user.email} onChange={inputChangeHandler}
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
          />
        </div>

        <div className="inputGroup">
          <button type="submit">UPDATE USER</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser