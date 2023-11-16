import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/Register'>Register</Link>
      <br />
      <Link to='/Login'>Login</Link>
    </div>
  );
}

export default Home;