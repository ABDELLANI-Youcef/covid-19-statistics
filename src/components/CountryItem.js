import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CountryItem({ country }) {
  return (
    <p>
      <Link to={{ pathname: '/country', state: { country } }}>{ country }</Link>
    </p>
  );
}

CountryItem.propTypes = {
  country: PropTypes.string.isRequired,
};

export default CountryItem;
