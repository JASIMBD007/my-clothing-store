import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Shop from './Pages/Shop/Shop';
import SignIn from './components/SignIn/SignIn';

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='signin' element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
