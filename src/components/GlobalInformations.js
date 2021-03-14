import PropTypes from 'prop-types';
import React from 'react';

const GlobalInformations = ({ world }) => (
  <>
    <div>
      <ul>
        <li>
          Population in the world:
          {world.population}
        </li>
        <li>
          Confirmed cases in the world:
          {' '}
          {world.confirmed}
        </li>
        <li>
          Deaths in the world:
          {' '}
          {world.deaths}
        </li>
        <li>
          Total of recovered Persons in the world:
          {' '}
          {world.recovered}
        </li>
      </ul>
    </div>
  </>
);

GlobalInformations.propTypes = {
  world: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GlobalInformations;
