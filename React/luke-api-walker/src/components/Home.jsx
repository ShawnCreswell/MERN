import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

  const [resource, setResource] = useState('people');
  const [selectedId, setSelectedId] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/${resource}/${selectedId}`);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Search for:</label>
            <select onChange={ e => setResource(e.target.value)}>
              <option value="people">People</option>
              <option value="planet">Planets</option>
            </select>
            <label>ID: </label>
            <input type="number" onChange={ e =>setSelectedId(e.target.value)} />
            <button> Search </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
