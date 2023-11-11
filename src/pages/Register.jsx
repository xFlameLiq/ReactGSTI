import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Register.css';

export default function Registrarme() {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleName(evt) {
    setName(evt.target.value);
  }

  function handleLastname(evt) {
    setLastname(evt.target.value);
  }
  
  function handleAddress(evt) {
    setAddress(evt.target.value);
  }

  function handlePhone(evt) {
    setPhone(evt.target.value);
  }

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }
  
  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  return (
    <div className="container">
      <form id="form" >
        <h1>Create an account</h1>
        <label>Name:</label>
        <input type="text" required name="" id="" value={name} onChange={handleName} />
        <label>Last name:</label>
        <input type="text" required lastname="" id="" value={lastname} onChange={handleLastname} />
        <label>Address:</label>
        <input type="text" required address="" id="" value={address} onChange={handleAddress}/>
        <label>Phone:</label>
        <input type="text" required phone="" id="" value={phone} onChange={handlePhone}/>
        <label>Email:</label>
        <input type="text" required email="" id="" value={email} onChange={handleEmail}/>
        <label>Password:</label>
        <input type="password" required password="" id="" value={password} onChange={handlePassword}/>
        <input type="submit" value="Registrarme"  />
        <div>
          <Link to='/login'>¿Do you already have an account? Login</Link>
        </div>
      </form>
      <img src="./images/logo_restaurant.png"/>
    </div>
  );
}