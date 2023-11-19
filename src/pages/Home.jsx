import { Link } from "react-router-dom";
import '../styles/Home.css';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
  
      <h1>BORCELLE</h1>
      <h2>Italian restaurant</h2>
      <Link to='/register' className='register-btn'>Register</Link>
      <br />
      <Link to='/login' className='login-btn'>Login</Link>
    <Footer />
    </div>

  );
}

export default Home;