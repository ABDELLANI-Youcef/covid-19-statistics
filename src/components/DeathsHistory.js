import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/History.module.css';

const DeathsHistory = ({ country }) => {
  const { dates } = country;
  const dataList = Object.keys(dates).splice(0, 30).map(d => (
    <li key={d}>
      {d}
      :
      {' '}
      <span className={styles.number}>
        {dates[d]}
      </span>
      {' '}
    </li>
  ));
  return (
    <div className={styles.history}>
      <h2>Deaths in the last 30 days</h2>
      <ul>
        {dataList}
      </ul>
    </div>
  );
};
DeathsHistory.propTypes = {
  country: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DeathsHistory;
