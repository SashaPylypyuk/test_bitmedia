import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPage } from '../store';

const UserTable = (props) => {
  let { page } = useParams();
  let { setPage, users, currentPage } = props;

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
              {user.id}
            </td>
            <td className="table__td">
              {user.first_name}
            </td>
            <td className="table__td">
              {user.last_name}
            </td>
            <td className="table__td">
              {user.email}
            </td>
            <td className="table__td">
              {user.gender}
            </td>
            <td className="table__td">
              {user.ip_address}
            </td>
            <td className="table__td">
              {user.total_clicks}
            </td>
            <td className="table__td">
              {user.page__views}
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
