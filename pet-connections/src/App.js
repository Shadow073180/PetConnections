import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  
  return (
    <div> 
      <div align='center'>
        <h1><b>PET CONNECTIONS</b></h1>
      </div>
      <hr />
      <div align='center'>
        <button a href='#'>Messages</button><button a href='#'>Profile</button><button a href='#'>Account</button><button a href='#'>Search</button><button a href='#' align='right'>LogOut</button>   
      </div>
      <hr />
      <div>
        <BrowserRouter>
        <div>
          <Route exact path="/login" component={Login}/>
        </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
