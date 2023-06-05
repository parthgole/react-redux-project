import React, { useState } from 'react';
import styles from './Style.module.css'
import { useSelector,useDispatch } from 'react-redux';
import {addToDo,deleteToDo,updateToDo,markCompletedToDo} from './ToDoSlice';

function ToDoList() {
  const [item,setItem]=useState('')
  const [newItem,setNewItem]=useState('')

  const todoList=useSelector((state)=>state.todo.value);
  const dispatch=useDispatch();
  const addItem=()=>{
    if(item===''){

    }else{
        dispatch(addToDo({id:new Date().getTime().toString(),
            item:item,status:false})) 
            setItem('')
    }
  }
  const change=(e,item)=>{
    // console.log(item)
    dispatch(markCompletedToDo({id:e.target.id,item:item,status:e.target.checked}))
    }
   const taskUpdate=(id)=>{
        if(newItem===''){

        }else{
        dispatch(updateToDo({id:id,item:newItem}))
        setNewItem('')
        }
   } 
   const deleteItem=(id)=>{
        dispatch(deleteToDo({id:id}))
      
   }
  return (
    <div className={styles.AppTodo}>
       <div>
      <input className={styles.inputText} type='text' placeholder='ADD-TO-ITEM....' 
      value={item} 
      onChange={(e)=>setItem(e.target.value)}/>
      <button className={styles.button} onClick={addItem}>Add Item</button><br/><br/><br/>

        <input className={styles.inputText} type='text' 
        placeholder='Enter Value Where To UpdateItem And Click On That Update....' value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
            /><br/>
       </div>
       <div className={styles.displayItem}>
        <div className={styles.displayItem}>
      {todoList.map((value,index)=>{
          return (
              <>
        <div key={index}>
        <h4>ID:{index+1}</h4>

        <input type="checkbox" id={index} 
        onChange={(e)=>change(e,value.item)} 
        checked={value.status} title="Set Priority"/>

        <h1 style={{textDecoration:value.status?'line-through':'',
        color:!value.status?'black':'blue'
        }}>ToDo-Item:{value.item}</h1>
        
        <button className={styles.button} onClick={()=>taskUpdate(value.id)}>Update</button>
        <button className={styles.button} onClick={()=>deleteItem(value.id)}>Delete</button>

        </div>
        </>
        )
      })}
        </div>
       </div>
    </div>
  );
}

export default ToDoList;
