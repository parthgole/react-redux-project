import {  useContext, useEffect, useState } from "react";
import {API} from "./ApiService";
import { Link,Route,Routes } from 'react-router-dom';
import {AddUser,GlobalStorage} from "./AddUser";
import './Style.css'


const UserApiList = () => {
  let newUser=useContext(GlobalStorage)
  const [loading,setLoading]=useState(false);
 
    const [usersSlice,setUsersSlice]=useState([]);
    
     const onPageLoad=async()=>{
        setLoading(true)
        let userList=await API.getUsers()
        setLoading(false)
        let userList1={...userList};
        let userList2= userList1.data.map((value,id)=>{
            return value.name
        })
        // console.log('newUser',newUser)
        userList2=[...userList2,...newUser]    
       setUsersSlice(userList2)
      }
      useEffect(()=>{
        onPageLoad()
      },[])
       
  return (
    <>

      {loading? (
        <div><h1>Loading...</h1></div>
      ) : (
        <table border="1px" style={{minWidth:'30px',margin:'auto',
        fontSize:'20px',backgroundColor:'yellow'}}>
          <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
          </tr>
          </thead>
          <tbody>
          {usersSlice?.map((user,id) => (
            <tr key={id}>
            <th>{id+1}</th>
            <th>{user}</th>
          </tr>
          ))}
          </tbody>
        </table>
        
      )}
       <Link to='/AddUser'><button>Add-New-User</button></Link>
       <Routes>
        <Route path='AddUser'  element={<AddUser/>}/>
       </Routes>
    </>
  );
};

export default UserApiList;