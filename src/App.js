import React from "react";
import Homepage from './Homepage';
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
          <Homepage />
        </Route>
      </Switch>

    </div>
  );
};

export default App;