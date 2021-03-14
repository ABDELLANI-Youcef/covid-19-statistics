import PropTypes from 'prop-types';
import React from 'react';

const DeathsHistory = ({ country }) => {
  const { dates } = country;
  const dataList = Object.keys(dates).map(d => (
    <li key={d}>
      {d}
      :
      {' '}
      {dates[d]}
      {' '}
    </li>
  ));
  return (
    <>
      <h2>Deaths history</h2>
      <ul>
        {dataList}
      </ul>
    </>
  );
};
DeathsHistory.propTypes = {
  country: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DeathsHistory;
