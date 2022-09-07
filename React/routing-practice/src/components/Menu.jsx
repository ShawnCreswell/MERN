import { Link, useNavigate } from "react-router-dom";

const Menu = () => {

  const navigate = useNavigate();
  
  const redirectToHeros = () => {
  navigate('/heroes')
}

  return (
  
      <nav className="navbar navbar-expanded d-flex">
        <div className="container-fluid">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/heroes"}>Heros</Link>
            </li>
          </ul>
        </div>
        <button onClick={redirectToHeros}>refresh</button>
      </nav>

  );
};

export default Menu;