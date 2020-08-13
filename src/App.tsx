import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { Main } from './components/pages/Main';
import { About } from './components/pages/About';
import { Dashboard } from './components/pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
