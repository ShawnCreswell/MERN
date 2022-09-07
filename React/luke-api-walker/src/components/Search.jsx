import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const naviagate = useNavigate();

  const redirectToPeople = () => {
    naviagate("/people");
  };

  return (
    <div className="container">
      <div className="dropdown">
        <label className="me-5">Search for:</label>
        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Choose one
        </button>
        <ul class="dropdown-menu">
          <li>
            <Link to={"/"}>Home</Link>
            <p>hello</p>
          </li>
          <li>
            <Link to={"/people"}>People</Link>
          </li>
          <li>
            <Link to={"/planets"}>Plates</Link>
          </li>
        </ul>
        <label className="ms-5">ID:</label>
        <input type="id" />
        <button className="btn btn-success">Search</button>
        <select name="" id="">
        </select>
      </div>
    </div>
  );
};

export default Search;
