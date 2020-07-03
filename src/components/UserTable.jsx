import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPage } from '../store';

const UserTable = (props) => {
  let { page } = useParams();
  let { setPage, users } = props;

  if (page === undefined || page <= 0) {
    page = 1;
    setPage(1);
  }

  const personsPerPage = 50;
  const offset = (page - 1) * personsPerPage;

  users = users.slice(offset, offset + personsPerPage);

  useEffect(() => {
    setPage(page);
  });

  return (
    <>
      <table className="table">
        <tr className="table__tr">
          <th className="table__th">
            Id
          </th>
          <th className="table__th">
            First name
          </th>
          <th className="table__th">
            Last name
          </th>
          <th className="table__th">
            Email
          </th>
          <th className="table__th">
            Gender
          </th>
          <th className="table__th">
            IP address
          </th>
          <th className="table__th">
            Total clicks
          </th>
          <th className="table__th">
            Total page views
          </th>
        </tr>

        {users.map(user => (
          <tr className="table__tr--person">
            <td className="table__td">
              <Link to={`/stats/user/${user.id}`} className="table__link">
                {user.id}
              </Link>
            </td>
            <td className="table__td">
              <Link to={`/stats/user/${user.id}`} className="table__link">
                {user.first_name}
              </Link>

            </td>
            <td className="table__td">
              <Link to={`/stats/user/${user.id}`} className="table__link">
                {user.last_name}
              </Link>

            </td>
            <td className="table__td">

              <Link to={`/stats/user/${user.id}`} className="table__link">
                {user.email}
              </Link>
            </td>
            <td className="table__td">

              <Link to={`/stats/user/${user.id}`} className="table__link">
                {user.gender}
              </Link>
            </td>
            <td className="table__td">
              <Link to={`/stats/user/${user.id}`} className="table__link">
                {user.ip_address}
              </Link>
            </td>
            <td className="table__td">
              <Link to={`/stats/user/${user.id}`} className="table__link">
                {user.total_clicks}
              </Link>
            </td>
            <td className="table__td">
              <Link to={`/stats/user/${user.id}`} className="table__link">
                {user.page__views}
              </Link>
            </td>
          </tr>

        ))}
      </table>
    </>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  setPage: page => dispatch(setPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
