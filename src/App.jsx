import { Route, Routes } from 'react-router-dom';
import './App.css';
import Directory from './components/Directory/Directory';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Shop from './Pages/Shop/Shop';

function App () {
  return (
    <>
      <Navbar />
      <Directory />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
