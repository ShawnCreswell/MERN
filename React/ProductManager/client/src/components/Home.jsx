import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="container">
      <Link className='btn btn-primary mt-5' to={"/"}>Home</Link>
    </div>
  );
};

export default Home;
