import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const Detail = ({ location, data }) => {
  const { country } = location.state;
  const countryData = data[country].All;
  return (
    <>
      <p>
        Hello world in our application! this is a Detail page concerning
        {' '}
        {country}
      </p>
      <ul>
        <li>
          The capital:
          {' '}
          {countryData.capital_city}
        </li>
        <li>
          Population:
          {' '}
          {countryData.population}
        </li>
        <li>
          confirmed:
          {' '}
          {countryData.confirmed}
          {' '}
          confirmed case
        </li>
        <li>
          {countryData.deaths}
          {' '}
          deaths
        </li>
        <li>
          {countryData.recovered}
          {' '}
          recovered persons
        </li>
      </ul>
    </>
  );
};

Detail.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  data: state.cases,
});

export default connect(mapStateToProps)(Detail);
