import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CountryItem from '../components/CountryItem';

const List = ({ filter, cases }) => {
  let countries = Object.keys(cases);

  if (countries.length > 0) {
    countries = countries.map(place => <CountryItem key={place} country={place} />);
  } else {
    countries = '';
  }
  return (
    <>
      <p>
        Hello world in our application!
      </p>
      <p>
        {filter}
      </p>
      <Link to={{ pathname: '/country', state: { country: 'palestine' } }}>More details</Link>
      {countries}
    </>
  );
};

List.propTypes = {
  filter: PropTypes.string.isRequired,
  cases: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
  cases: state.cases,
});

export default connect(mapStateToProps)(List);
