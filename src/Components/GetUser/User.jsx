import React, { useEffect, useState } from 'react'
import './User.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const User = () => {
  //step-2:
  const [users, setUsers] = useState([])

  //step-1:
  useEffect(()=>{
    const fetchData = async()=>{
     const response = await axios.get("https://mern-backend-ud4j.onrender.com/user/allusers");
     //step-3:
     setUsers(response.data)
    }
    //step-4:
    fetchData()

  },[])

  //Deletion
  const deleteUser = async(userId)=>{
    await axios.delete(`https://mern-backend-ud4j.onrender.com/user/delete/${userId}`)
    .then((response)=>{
      setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
      //console.log(response);
      toast.success(response.data.message,{position:'top-right'})
    }).catch((error)=>{
      console.log(error);
      
    })
  }

  return (
    <div className="userTable">
      <Link to={"/add"} className='addButton'>Add User</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* step-5: */}
          {
            users.map((user, index)=>{
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    {user.fname} {user.lname}
                  </td>
                  <td>{user.email}</td>
                  <td className="actionButtons">
                    <button onClick={()=>deleteUser(user._id)}> 
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <Link to={`/edit/`+user._id}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                  </td>
                </tr>
              );
            })
          }
          
        </tbody>
      </table>
    </div>
  );
}

export default User