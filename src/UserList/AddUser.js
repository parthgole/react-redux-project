import React,{useState,createContext} from 'react'
import UserApiList from './UserApiList';
import { Link,Route,Routes } from 'react-router-dom';
import './Style.css'

export let GlobalStorage=createContext([]);

export  function AddUser() {
    const[newData,setNewData]=useState(GlobalStorage._currentValue2);
    const [inputName,setInputName]=useState('');
    const newUser=(name)=>{
        if(name===''){
          
        }else{
          const newData1=[...newData,name]
          setNewData(newData1)
          GlobalStorage._currentValue2=[...GlobalStorage._currentValue2,name]
          GlobalStorage=createContext([...GlobalStorage._currentValue2])
          setInputName('')
        }
      }
  return (
    <div>
      <span>Enter Name In API LIST</span>
      <br/><br/><br/>
      <input className='inputText' type="text" value={inputName} onChange={(e)=>setInputName(e.target.value)}/><br/><br/>
      {inputName!==''?<button className='buttonAddUser' onClick={()=>newUser(inputName)}>
      <Link to='/UserApiList'>
      AddUser
      </Link>
      </button>:<button className='buttonAddUser'>AddUser</button>}
      <br/><br/><br/>
       <Routes>
        <Route path='/UserApiList'  element={<UserApiList/>}/>
       </Routes>
    </div>
  )
}