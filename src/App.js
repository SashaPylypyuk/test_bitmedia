import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Stats } from './components/Stats';
import './App.css';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <About />
          <Footer />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
