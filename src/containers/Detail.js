import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { createHistoryDeaths, createHistoryConfirmed, createCase } from '../actions/index';
import GeneralDetail from '../components/GeneralDetail';
import DeathsHistory from '../components/DeathsHistory';
import ConfirmedHistory from '../components/ConfirmedHistory';
import { gatherCasesInformations, requestHistory } from '../reducers/cases';
import styles from '../styles/Detail.module.css';

const Detail = ({
  data, createHistoryConfirmed, createHistoryDeaths, deaths, confirmed, createCase,
}) => {
  const { country } = useParams();

  useEffect(() => {
    if (Object.keys(data).length === 0) {
      gatherCasesInformations(createCase);
    }
    if (Object.keys(deaths).length === 0 || deaths.All.country !== country) {
      requestHistory(country, createHistoryConfirmed, createHistoryDeaths);
    }
  }, []);

  if (Object.keys(data).length === 0) {
    return (
      <p>Please wait</p>
    );
  }

  const countryData = data[country].All;
  let deathsHistory = null;
  let confirmedHistory = null;
  let loading = null;
  if (Object.keys(deaths).length === 0 || deaths.All.country !== country) {
    loading = (
      <div className={styles.loading}>
        <Loader type="Oval" color="#000000" height={100} width={100} timeout={0} />
      </div>
    );
  } else {
    deathsHistory = (
      <DeathsHistory country={deaths.All} />
    );
    confirmedHistory = (
      <ConfirmedHistory country={confirmed.All} />
    );
  }

  return (
    <div className={styles.bigContainer}>
      <GeneralDetail country={countryData} />
      <div className={styles.container}>
        {loading}
        {deathsHistory}
        {confirmedHistory}
      </div>
    </div>
  );
};

Detail.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  createHistoryConfirmed: PropTypes.func.isRequired,
  createHistoryDeaths: PropTypes.func.isRequired,
  deaths: PropTypes.objectOf(PropTypes.any).isRequired,
  confirmed: PropTypes.objectOf(PropTypes.any).isRequired,
  createCase: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.cases,
  deaths: state.deathsHistory,
  confirmed: state.confirmedHistory,
});

const mapDispatchToProps = {
  createHistoryConfirmed,
  createHistoryDeaths,
  createCase,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
