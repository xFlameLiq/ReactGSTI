import { Link } from "react-router-dom";
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link className="links" to='/Register'>Register</Link>
      <br />
      <Link className="links" to='/Login'>Login</Link>
    </div>
  );
}

export default Home;