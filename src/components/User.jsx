import React from 'react';
import {
  useParams,
  Link,
} from 'react-router-dom';
import users from '../api/users.json';
import stats from '../api/users_statistic.json';
import CanvasJSReact from '../lib/canvasjs/canvasjs.react';

export const User = (props) => {
  const dataClicks = [];
  const dataViews = [];
  const { id } = useParams();
  const user = users.find(user => user.id === Number.parseInt(id, 10));
  const userStats = stats.filter(stats => stats.user_id === user.id);

  for (let i = 0; i < userStats.length; i++) {
    dataClicks.push({
      x: new Date(userStats[i].date),
      y: userStats[i].clicks,
    });
  }

  for (let i = 0; i < userStats.length; i++) {
    dataViews.push({
      x: new Date(userStats[i].date),
      y: userStats[i].page_views,
    });
  }

  const clicks = {
    animationEnabled: true,
    height: 300,
    legend: {
      color: '#CCCCCC',
    },
    axisY: {
      gridThickness: 0.5,
      color: '#F1F1F1',
    },
    axisX: {
      gridThickness: 0,
    },
    data: [{
      type: 'spline',
      color: '#3A80BA',
      xValueFormatString: 'MMM YYYY',
      yValueFormatString: '####',
      dataPoints: dataClicks,
    }],
  };

  const views = {
    animationEnabled: true,
    height: 300,
    legend: {
      color: '#CCCCCC',
    },
    axisY: {
      gridThickness: 0.5,
      color: '#F1F1F1',
    },
    axisX: {
      gridThickness: 0,
    },
    data: [{
      type: 'spline',
      color: '#3A80BA',
      xValueFormatString: 'MMM YYYY',
      yValueFormatString: '####',
      dataPoints: dataViews,
    }],
  };

  console.log(userStats);
  console.log(user);

  const { CanvasJSChart } = CanvasJSReact;

  return (
    <div className="user">
      <div className="user__links">
        <Link to="/" className="user__links--item">
          Main page
        </Link>
        <Link to="/stats/page/1" className="user__links--item">
          Stats
        </Link>
        <p className="user__links--item user__links--name">
          {`${user.first_name} ${user.last_name}`}
        </p>
      </div>
      <div className="user__stats">
        <p className="user__name">
          {`${user.first_name} ${user.last_name}`}
        </p>
        <p className="user__category">
          Clicks
        </p>

        <div className="user__canvas">
          <CanvasJSChart options={clicks} />
        </div>
        <p className="user__category">
          Views
        </p>
        <div className="user__canvas">
          <CanvasJSChart options={views} />
        </div>
      </div>
    </div>
  );
};
