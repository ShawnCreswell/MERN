import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';

function Planet(props) {
  const {id} = useParams();
  const [planet, setPlanet] = useState("");

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
    .then( response => setPlanet(response.data))
    .catch( err => console.log(err));

}, [id]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2>Name: {planet.name}</h2>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Rotational Period: {planet.rotation_period}hrs</p>
          <p>Orbital Period: {planet.orbital_period}days</p>
          <p>Surface Water: {planet.surface_water}</p>
          <p>Population: {planet.population}</p>
        </div>
      </div>
    </div>
  );
}

export default Planet;
