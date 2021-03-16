import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/GeneralDetail.module.css';

const GeneralDetail = ({ country }) => (
  <div className={styles.container}>
    <div className={styles.information}>
      The capital:
      {' '}
      <span className={styles.number}>
        {country.capital_city}
      </span>
    </div>

    <div className={styles.information}>
      Population:
      {' '}
      <span className={styles.number}>
        {country.population}
      </span>
    </div>

    <div className={styles.information}>
      confirmed:
      {' '}
      <span className={`${styles.number} ${styles.danger}`}>
        {country.confirmed}
      </span>
      {' '}
      confirmed case
    </div>

    <div className={styles.information}>
      <span className={`${styles.number} ${styles.danger}`}>
        {country.deaths}
      </span>
      {' '}
      deaths
    </div>

    <div className={styles.information}>
      <span className={`${styles.number} ${styles.safe}`}>
        {country.recovered}
      </span>
      {' '}
      recovered persons
    </div>
  </div>
);

GeneralDetail.propTypes = {
  country: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GeneralDetail;
