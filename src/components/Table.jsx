import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import cn from 'classnames';
import { connect } from 'react-redux';
import users from '../api/users.json';
import stats from '../api/users_statistic.json';
import UserTable from './UserTable';

const Table = (props) => {
  let { currentPage } = props;
  let completedUsers = [];

  const setUsers = () => {
    completedUsers = users.map(user => ({
      ...user,
      total_clicks: stats.find(person => person.user_id === user.id).clicks,
      page__views: stats.find(person => person.user_id === user.id).page_views,
    }));
  };

  if (!completedUsers.length) {
    setUsers();
  }

  const personsPerPage = 50;
  const pagesCount = completedUsers.length / personsPerPage;

  useEffect(() => {
    console.log(currentPage);
  });

  currentPage = Number.parseInt(currentPage, 10);

  const pagesMap = [];

  if (currentPage === 1) {
    pagesMap.push(1, 2, 3, pagesCount);
  } else if (currentPage === 2) {
    pagesMap.push(1, 2, 3, 4, pagesCount);
  } else if (currentPage === 3) {
    pagesMap.push(1, 2, 3, 4, 5, pagesCount);
  } else if (currentPage === pagesCount) {
    pagesMap.push(1, 18, 19, pagesCount);
  } else if (currentPage === (pagesCount - 1)) {
    pagesMap.push(1, 17, 18, 19, pagesCount);
  } else if (currentPage === (pagesCount - 2)) {
    pagesMap.push(1, 16, 17, 18, 19, pagesCount);
  } else {
    pagesMap.push(1, currentPage - 2, currentPage - 1,
      currentPage, currentPage + 1, currentPage + 2, pagesCount);
  }

  return (
    <>
      <h1 className="text--bold">
        Users statissics
      </h1>
      <div className="links">
        <Link className="links__item" to="/">
          Main page
        </Link>
        <p className="links__item links__item--active">
          User satistics
        </p>
      </div>
      {completedUsers.length ? (
        <>
          <Switch>
            <Route exact path="/stats">
              <UserTable users={completedUsers} />
            </Route>
            <Route path="/stats/page/:page">
              <UserTable users={completedUsers} />
            </Route>
          </Switch>
          <div className="pages">

            {pagesMap.map(page => (
              <Link
                className={cn('pages__link',
                  { 'pages__link--active': page === currentPage })}
                to={`/stats/page/${page}`}
              >
                {page}
              </Link>
            ))}
          </div>
        </>
      ) : (
        setUsers()
      )}

    </>
  );
};

const mapStateToProps = state => ({
  currentPage: state.state,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
