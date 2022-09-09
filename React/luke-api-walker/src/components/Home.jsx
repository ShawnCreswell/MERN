import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
          <div className="card">
            <div className="card-header text-center">
            <form onSubmit={handleSubmit}>
              <label>Search for:</label>
              <select onChange={ e => setResource(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
              </select>
              <label className="ms-4">ID: </label>
              <input type="number" onChange={ e =>setSelectedId(e.target.value)} />
              <button className="btn btn-primary"> Search </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
