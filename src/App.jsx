
import '../src/styles/App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
