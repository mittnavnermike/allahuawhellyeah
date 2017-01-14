
import React from 'react';

import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';


/**
 * Routes
 */
const createRoutes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route name="about" path="/about" component={About} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
);

/**
 * Export routes
 */
export default createRoutes;
