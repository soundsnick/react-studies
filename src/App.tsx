import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { Main } from './components/pages/Main';
import { About } from './components/pages/About';
import { Dashboard } from './components/pages/Dashboard';
import { Profile } from './components/pages/Profile';

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
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
