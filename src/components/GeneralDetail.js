import PropTypes from 'prop-types';
import React from 'react';

const GeneralDetail = ({ country }) => (
  <div>
    <ul>
      <li>
        The capital:
        {' '}
        {country.capital_city}
      </li>
      <li>
        Population:
        {' '}
        {country.population}
      </li>
      <li>
        confirmed:
        {' '}
        {country.confirmed}
        {' '}
        confirmed case
      </li>
      <li>
        {country.deaths}
        {' '}
        deaths
      </li>
      <li>
        {country.recovered}
        {' '}
        recovered persons
      </li>
    </ul>
  </div>
);

GeneralDetail.propTypes = {
  country: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GeneralDetail;
