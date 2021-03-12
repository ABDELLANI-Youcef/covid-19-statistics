import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from './containers/List';
import Detail from './containers/Detail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/country" component={Detail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
