import React,{useState} from 'react'
import UserApiList from './UserApiList';
import { Link,Route,Routes } from 'react-router-dom';
import './Style.css'


function AddUser() {
    const [inputName,setInputName]=useState('');
    const newUser=(name)=>{
        function LocalStorage(UserLocalStorage) {
          localStorage.setItem('UserLocalStorage', JSON.stringify(UserLocalStorage));
        }
        
        const localStorageData = JSON.parse(
          localStorage.getItem('UserLocalStorage')
          );
          
        let UserLocalStorage =
        localStorage.getItem('UserLocalStorage') !== null ? 
        localStorageData : [];

        if(name===''){
          
        }else{
          const newName1=[...UserLocalStorage,name]
          UserLocalStorage=[...newName1]
          LocalStorage(UserLocalStorage)
          setInputName('')
        }
        // console.log('API',localStorage.getItem('UserLocalStorage'))
      }
  return (
    <div>
      <span>Enter Name In API LIST</span>
      <br/><br/><br/>
      <input className='inputText' type="text" value={inputName} onChange={(e)=>setInputName(e.target.value)}/>
      <button className='buttonAddUser' onClick={()=>newUser(inputName)}>
      <Link to='/UserApiList'>
      AddUser
      </Link>
      </button>
      <br/><br/><br/>
       <Routes>
        <Route path='/UserApiList'  element={<UserApiList/>}/>
       </Routes>
    </div>
  )
}

export default AddUser
