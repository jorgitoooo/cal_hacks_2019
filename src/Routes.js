import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import Feed from './pages/Feed';
import Restaurant from './pages/Restaurant';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FourOFour from './pages/FourOFour';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Feed} />
      <Route path='/restaurant' exact component={Restaurant} />
      <Route path='/login' exact component={Login} />
      <Route path='/signup' exact component={Signup} />
      <Route component={FourOFour} />
    </Switch>
  );
}
