import React, { useState, useEffect } from "react";
// import React, { useEffect} from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

const People = (props) => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  // const person = person.find(p => p.id === id)

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        console.log(response.data)
        setPerson(response.data)

      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container">
      <div className="card">
        {person && (
          <div className="card-body">
            <h2>Name: {person.name}</h2>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>skin Color: {person.skin_color}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default People;
