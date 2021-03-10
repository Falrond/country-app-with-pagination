import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import Error from './pages/Error';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/country/:callCode">
          <CountryPage />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
