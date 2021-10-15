import React from "react";
import Home from './Home';
import { Link, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <nav>
          {/* Header */}
          {/* Header */}
          {/* Header */}
        <h1 className='pizza-header'>Lambda Eats</h1>
          {/* NavLinks */}
          {/* NavLinks */}
          {/* NavLinks */}
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/"> 
          <Home />
        </Route>
      </Switch>

    </div>
  );
};

export default App;