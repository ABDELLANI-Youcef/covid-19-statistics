import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createHistoryDeaths, createHistoryConfirmed } from '../actions/index';
import GeneralDetail from '../components/GeneralDetail';

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
  location, data, createHistoryConfirmed, createHistoryDeaths, deaths, confirmed,
}) => {
  const { country } = location.state;

  if (Object.keys(data).length === 0) {
    return (
      <p>Please wait</p>
    );
  }
  const countryData = data[country].All;
  let deathsHistory = null;
  let confirmedHistory = null;
  if (Object.keys(deaths).length === 0 || deaths.All.country !== country) {
    requestHistory(country, createHistoryConfirmed, createHistoryDeaths);
    deathsHistory = null;
  } else {
    deathsHistory = (
      <div>
        {deaths.All.country}
        ;
      </div>
    );
    confirmedHistory = (
      <div>
        {confirmed.All.country}
      </div>
    );
  }

  return (
    <>
      <Link to="/">Go back home</Link>
      <GeneralDetail country={countryData} />
      {deathsHistory}
      {confirmedHistory}
    </>
  );
};

Detail.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  createHistoryConfirmed: PropTypes.func.isRequired,
  createHistoryDeaths: PropTypes.func.isRequired,
  deaths: PropTypes.objectOf(PropTypes.any).isRequired,
  confirmed: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  data: state.cases,
  deaths: state.deathsHistory,
  confirmed: state.confirmedHistory,
});

const mapDispatchToProps = {
  createHistoryConfirmed,
  createHistoryDeaths,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
