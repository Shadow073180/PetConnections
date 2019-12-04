import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Route exact path="/login" component={Login}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
