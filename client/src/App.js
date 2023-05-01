import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import CreateAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage";

// import carousel from "./components/carousel";

function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/' element={<ProductPage/>} />
          <Route path='/login/' element={<LoginPage/>} />
          <Route path='/signup' element={<CreateAccountPage/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}



export default App;