import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Nav';
import Home from './Home';
import Add from './Add';
import Login from './Login';
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/Add" element={<Add/>}> </Route>
        <Route path="/Login" element={<Login/>}> </Route>
        <Route path="/Checkout" element={<Checkout/>}> </Route>


      </Routes>
    </BrowserRouter>

    </div>
  );
} 

export default App;
