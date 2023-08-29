import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Shop from './Pages/Shop/Shop';
import Authentication from './components/Authentication/Authentication';
import CheckOut from './Pages/CheckOut/CheckOut';

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
