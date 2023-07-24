
import './App.css';
import Navbar from './component/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import TodaysAppointment from './component/TodaysAppointment';
import AddBlogs from './component/AddBlogs';
import BeautyBlogs from './component/BeautyBlogs';
function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/todays' element={<TodaysAppointment />}></Route>
      <Route exact path='/blog' element={<AddBlogs />}></Route>
      <Route exact path='/beautyBlogs' element={<BeautyBlogs />}></Route>

      </Routes>
    </div>
  );
}

export default App;
