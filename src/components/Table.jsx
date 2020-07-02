import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { getPage } from '../store';
import users from '../api/users.json';
import stats from '../api/users_statistic.json';
import UserTable from './UserTable';

const Table = (props) => {
  const { currentPage } = props;
  const completedUsers = users.map(user => ({
    ...user,
    total_clicks: stats.find(person => person.user_id === user.id).clicks,
    page__views: stats.find(person => person.user_id === user.id).page_views,
  }));

  const personsPerPage = 50;
  const pagesCount = completedUsers.length / personsPerPage;

  useEffect(() => {
    console.log(currentPage);
  });

  return (
    <>
      <Switch>
        <Route exact path="/stats">
          <UserTable users={completedUsers} />
        </Route>
        <Route path="/stats/:page">
          <UserTable users={completedUsers} />
        </Route>
      </Switch>
      <div className="pages">
        <Link className="pages__link" to="/stats/1">
          1
        </Link>
        <Link className="pages__link" to={`/stats/${Number.parseInt(currentPage, 10) - 2}`}>
          {Number.parseInt(currentPage, 10) - 2}
        </Link>
        <Link className="pages__link" to={`/stats/${Number.parseInt(currentPage, 10) - 1}`}>
          {Number.parseInt(currentPage, 10) - 1}
        </Link>
        <Link className="pages__link" to={`/stats/${currentPage}`}>
          {currentPage}
        </Link>
        <Link
          className="pages__link"
          to={`/stats/${Number.parseInt(currentPage, 10) + 1}`}
        >
          {Number.parseInt(currentPage, 10) + 1}
        </Link>
        <Link className="pages__link" to={`/stats/${Number.parseInt(currentPage, 10) + 2}`}>
          {Number.parseInt(currentPage, 10) + 2}
        </Link>
        <Link className="pages__link" to={`/stats/${pagesCount}`}>
          {pagesCount}
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  currentPage: state.state,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);