import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import UserApiList from './UserList/UserApiList';
import {AddUser} from './UserList/AddUser';
import ToDoList from './features/ToDoWithReduxToolkit/ToDoList';
import { Link,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <nav>
      <ul>
        <li>
          <Link to='/'>ToDoList</Link>
        </li>
        <li>
          <Link to='/UserApiList' >UserApiList</Link>
        </li>
        <li>
          <Link to='/AddUser'>AddUser</Link>
        </li>
        
      </ul>
    </nav>
    <div className='mainDisplay'>
    <Routes>
      <Route exact path='/' element={<ToDoList/>}/>
      <Route path='/UserApiList'  element={<UserApiList/>}/>
      <Route path='/AddUser'  element={<AddUser/>}/>
    </Routes>
    </div>
  </div>
  );
}

export default App;
