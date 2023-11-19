import { Link } from "react-router-dom";
import '../styles/Home.css';
import Footer from '../components/Footer';
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      <h1>BORCELLE</h1>
      <h2>Italian restaurant</h2>
      <Link to='/register' className='register-btn'>Register</Link>
      <br />
      <Link to='/login' className='login-btn'>Login</Link>
    <Footer />
      <h1>Home</h1>
      <Link className="links" to='/Register'>Register</Link>
      <br />
      <Link className="links" to='/Login'>Login</Link>
    </div>

  );
}

export default Home;