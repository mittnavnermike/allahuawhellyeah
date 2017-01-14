import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Minimal global styling
import './styles';

import createRoutes from './routes';
import store from './store';
const history = syncHistoryWithStore(browserHistory, store);

const routes = createRoutes({ history });

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root'),
);
