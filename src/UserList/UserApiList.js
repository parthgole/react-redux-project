import {  useState } from "react";
import {API} from "./ApiService";
import { Link,Route,Routes } from 'react-router-dom';
import AddUser from "./AddUser";
import './Style.css'


const UserApiList = () => {
  const [loading,setLoading]=useState(false);
  function LocalStorage(UserLocalStorage) {
    localStorage.setItem('UserLocalStorage', JSON.stringify(UserLocalStorage));
  }
  
  const localStorageData = JSON.parse(
    localStorage.getItem('UserLocalStorage')
    );
    
    let UserLocalStorage =
    localStorage.getItem('UserLocalStorage') !== null ? 
    localStorageData : [];
    
    const [usersSlice,setUsersSlice]=useState(UserLocalStorage);
    
     const onPageLoad=async()=>{
        setLoading(true)
        let userList=await API.getUsers()
        setLoading(false)
        let userList1={...userList};
        const userList2= userList1.data.map((value,id)=>{
            return value.name
        })
         
       UserLocalStorage=[...userList2]
       LocalStorage(UserLocalStorage)        
       setUsersSlice(UserLocalStorage)
      }
      window.addEventListener('load', onPageLoad);
       
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
