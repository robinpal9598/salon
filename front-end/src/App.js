import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Trending from './components/Trending';
import Services from './components/Services';
import {Routes,Route} from 'react-router-dom';
import Bridal from './components/Bridal';
import Appointment from './components/Appointment';
import Blogs from './components/Blogs';
import Makeup from './components/services/Makeup';
import Skincare from './components/services/Skincare';
import Haircare from './components/services/Haircare';
import Login from './components/Login';

import Register from './components/Register';
import Profile from './components/Profile';
import { useState ,useEffect } from 'react';
import Receipt from './components/Receipt';
import LoginG from './components/LoginG';
function App() {
  const [flag,setFlag]=useState(false);
  
  return (
    <div className="App">

    <Navbar setflag={setFlag} />
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/trending' element={<Trending />}></Route>
      <Route exact path='/services' element={<Services />}></Route>
      <Route exact path='/bridal' element={<Bridal />}></Route>
      <Route exact path='/appointment' element={<Appointment />}></Route>
      <Route exact path='/blogs' element={<Blogs />}></Route>
      <Route exact path='/makeup' element={<Makeup />}></Route>
      <Route exact path='/skinCare' element={<Skincare />}></Route>
      <Route exact path='/hairCare' element={<Haircare />}></Route>
      <Route exact path='/register' element={<Register />}></Route>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/profile' element={<Profile />}></Route>
      <Route exact path='/receipt' element={<Receipt />}></Route>
      <Route exact path='/googleLogin' element={<LoginG />}></Route>
    </Routes>
    </div>
  );
}

export default App;
