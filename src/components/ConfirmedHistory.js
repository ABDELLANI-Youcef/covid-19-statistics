import PropTypes from 'prop-types';
import React from 'react';

const ConfirmedHistory = ({ country }) => {
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
      <h2>Confirmed history</h2>
      <ul>
        {dataList}
      </ul>
    </>
  );
};
ConfirmedHistory.propTypes = {
  country: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ConfirmedHistory;
