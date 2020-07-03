import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Table from './Table';
import { User } from './User';

export const Stats = () => (
  <>
    <header className="Sheader">
      <h1 className="Sheader__text">
        AppCo
      </h1>
    </header>
    <div className="wrapper">
      <Switch>
        <Route path="/stats/page/">
          <Table />
        </Route>
        <Route path="/stats/user/:id">
          <User />
        </Route>
      </Switch>

    </div>
    <footer className="Sfooter">
      <h1 className="Sfooter__text--logo">
        AppCo
      </h1>
      <p className="Sfooter__text--rights">
        All rights reserved by ThemeTags
      </p>
      <p className="Sfooter__text--copyrights">
        Copyrights © 2019.
      </p>
    </footer>
  </>
);
