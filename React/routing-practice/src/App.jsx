import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./lux.css";

const Home = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 style={{ color: "red" }}>Home Component</h1>
          <Link to={"/about"}>Go to About </Link>
        </div>
      </div>
    </div>
  );
};

const About = (props) => {
  return (
    <div className="container">
      <div className="r">
        <div className="col">
          <h1 style={{ color: "blue" }}>About Component</h1>
          <Link to={"/"}>Go Home</Link>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
