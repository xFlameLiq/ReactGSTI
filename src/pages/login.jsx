import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  return (
    <div className="container-main">
      <form className="form" id="form">
        <div className="sesion-img"></div>
        <h1 className="title">Welcome</h1>
        <div className="data">
          <label>Email:</label>
          <input className="input" type="text" name="" id="" value={email} onChange={handleEmail} />
        </div>
        <div className="data">
          <label>Password:</label>
          <input className="input" type="password" name="" id="" value={pass} onChange={handlePassword} />
        </div>
        <input className="input" type="submit" value="Enter" />
        <Link className="a" to="/Register">
          ¿Don't have an account? Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
