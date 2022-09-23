import './App.css';
import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import {Home} from "../src/Pages/Home";
  export default function App(){
    <BrowserRouter>
    <Routes>
      <Route path = "/" component={Home}/>
    </Routes>
    </BrowserRouter>
  }
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
