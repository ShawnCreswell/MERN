import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams, Link, useNavigate } from "react-router-dom";


const Home = () => {
  return (
    <div className="container">
      <Link className='btn btn-primary mt-5' to={"/"}>Home</Link>
    </div>
  );
};

export default Home;
