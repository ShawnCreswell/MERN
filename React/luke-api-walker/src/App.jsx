import { Routes, Route } from "react-router-dom";
// import Search from "./components/Search";
import Home from "./components/Home";
import People from "./components/People";
import Planet from "./components/Planets";
// import { useState } from "react";
// import axios from 'axios'
import "./lux.css";

const container ={
  width: '70%',
  margin: '20px auto'
}
const App = () => {
  
  return (
    <div style={container}>
      <Home />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planet />} />
        {/* <People path="/people/:id" />
        <Planet path="/planet/:id" /> */}

      </Routes>
    </div>
  );
};

export default App;
