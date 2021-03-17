import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/CountryItem.module.css';

function CountryItem({ country, name }) {
  return (
    <div className={styles.listing}>
      <p>
        <Link to={{ pathname: `/country/${name}` }}>{ name }</Link>
      </p>
      <p>
        Confirmed cases:
        {' '}
        <span className={styles.number}>
          {country.confirmed}
        </span>
      </p>
      <p>
        Deaths:
        {' '}
        <span className={styles.number}>
          {country.deaths}
        </span>
      </p>
      <p>
        Recovery:
        {' '}
        <span className={styles.number}>
          {country.recovered}
        </span>
      </p>

    </div>
  );
}

CountryItem.propTypes = {
  country: PropTypes.objectOf(PropTypes.any).isRequired,
  name: PropTypes.string.isRequired,
};

export default CountryItem;
