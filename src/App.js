import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Shipment from './Components/Shipment/Shipment';
import Shop from './Components/Shop/Shop';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/orders' element={<Orders></Orders>} />
        <Route path='/inventory' element={<RequireAuth><Inventory/></RequireAuth>} />
        <Route path='/shipment' element={<RequireAuth><Shipment/></RequireAuth>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;