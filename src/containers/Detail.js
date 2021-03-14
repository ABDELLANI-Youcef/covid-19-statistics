import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createHistoryDeaths, createHistoryConfirmed } from '../actions/index';

const requestHistory = async (nameCountry, createHistoryConfirmed,
  createHistoryDeaths) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const deathsResponse = await fetch(`https://covid-api.mmediagroup.fr/v1/history?country=${nameCountry}&status=deaths`, options);
    const deaths = await deathsResponse.json();
    const confirmedResponse = await fetch(`https://covid-api.mmediagroup.fr/v1/history?country=${nameCountry}&status=confirmed`, options);
    const confirmed = await confirmedResponse.json();
    createHistoryConfirmed(confirmed);
    createHistoryDeaths(deaths);
  } catch (error) {
    createHistoryConfirmed(error);
    createHistoryDeaths(error);
  }
};
const Detail = ({
  location, data, createHistoryConfirmed, createHistoryDeaths,
}) => {
  const { country } = location.state;
  requestHistory(country, createHistoryConfirmed, createHistoryDeaths);

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
  createHistoryConfirmed: PropTypes.func.isRequired,
  createHistoryDeaths: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.cases,
});

const mapDispatchToProps = {
  createHistoryConfirmed,
  createHistoryDeaths,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
