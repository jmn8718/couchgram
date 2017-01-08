import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import HomeContainer from './containers/HomeContainer';
import NotFoundContainer from './containers/NotFoundContainer';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer}/>
      <Route path="*" component={NotFoundContainer} />
    </Route>
  </Router>
);
export default Routes;
