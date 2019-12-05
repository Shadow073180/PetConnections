import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import Profile from './components/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  
  return (
    <div> 
      <head>
        <link href="https://fonts.googleapis.com/css?family=Tangerine&display=swap" rel="stylesheet"></link>
      </head>
      <div align='center' className='title-bar'>
      
        <h1 className='title'><b>PET CONNECTIONS</b></h1>
      </div>
      <div align='center' className='Nav-bar-bottom'>
      <hr  className = 'Hr-bottom'/>
        <button a href='#'>Messages</button>
        <select a href='#' className='Profile-button' ><option>Profile</option><option>Update Profile</option></select>
        <select a href='#' className='Account-button'><option>Account</option><option>Update Account</option></select>
        <button a href='#'>Search</button>
        <button a href='#' align='right'>LogOut</button>   
        <hr className='Hr-bottom' />
      </div>
      <div>
      <BrowserRouter>
      <div>
        <Route exact path="/login" component={Login}/>
        <Route exact path = "/profile" component={Profile}/>
      </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
