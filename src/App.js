import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Header } from './components/Header';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Stats } from './components/Stats';
import './App.css';
import { store } from './store';

const App = () => (
  <>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/test_bitmedia/">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/test_bitmedia/stats">
            <Stats />
          </Route>
        </Switch>
      </Router>
    </Provider>

  </>
);

export default App;
