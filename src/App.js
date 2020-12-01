import React from "react";
import "./App.css";
import { BrowserRouter as Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Sistema/Home";
import Sistema from "./Sistema/Sistema";


function App() {
  console.log('teste')
return( 
 <BrowserRouter>
 <Routes>
    <Route exact path="/"> <Home/></Route>
    <Route path="/Sistema"> <Sistema/></Route>
 </Routes>
 
 </BrowserRouter>
);
}

export default App
