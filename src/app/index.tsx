import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router';
import { MainContainer } from 'app/containers';

// render react DOM
export const App = hot(({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={MainContainer} />
      </Switch>
    </Router>
  );
});
