import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/GlobalInformations.module.css';

const GlobalInformations = ({ world }) => (
  <div className={styles.container}>
    <div>
      Population in the world:
      {' '}
      <span className={styles.number}>
        {world.population}
      </span>
    </div>
    <div>
      Confirmed cases in the world:
      {' '}
      <span className={styles.number}>
        {world.confirmed}
      </span>
    </div>
    <div>
      Deaths in the world:
      {' '}
      <span className={styles.number}>
        {world.deaths}
      </span>
    </div>
    <div>
      Total of recoveries in the world:
      {' '}
      <span className={styles.number}>
        {world.recovered}
      </span>
    </div>
  </div>

);

GlobalInformations.propTypes = {
  world: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GlobalInformations;
