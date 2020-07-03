import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
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
    </Provider>

  </>
);

export default App;
