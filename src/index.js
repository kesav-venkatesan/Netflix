import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignIn from "./SignIn.js";
import Home from "./Main.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route element={<App/>} path="/"/>
    <Route element={<SignIn/>} path="/signin"/>
    <Route element={<Home/>} path="/HomePage"/>
  </Routes>
  </BrowserRouter>
);


