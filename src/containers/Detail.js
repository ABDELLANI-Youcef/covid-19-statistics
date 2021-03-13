import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Detail = ({ location, data }) => {
  const { country } = location.state;
  if (Object.keys(data).length === 0) {
    return (
      <p>Please wait</p>
    );
  }
  const countryData = data[country].All;

  return (
    <>
      <Link to="/">Go back home</Link>
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
