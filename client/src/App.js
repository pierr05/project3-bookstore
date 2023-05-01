import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom';
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
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/product/:id' component=
          {ProductPage} />
          <Route path='/login' component=
          {LoginPage} />
          <Route path='/signup' component=
          {CreateAccountPage} />
          <Route path='/cart' component=
          {Cart} />
  
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}



export default App;