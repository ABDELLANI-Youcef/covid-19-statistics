import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CountryItem from '../components/CountryItem';
import FilterForm from '../components/FilterForm';
import { createFilter } from '../actions/index';

const List = ({ filter, cases, createFilter }) => {
  let countries = Object.keys(cases);
  const clickHandle = newFilter => {
    createFilter(newFilter);
  };

  if (filter !== 'All') {
    countries = Object.entries(cases).filter(row => row[1].All.continent === filter)
      .map(e => e[0]);
  }

  if (countries.length > 0) {
    countries = countries.map(place => <CountryItem key={place} country={place} />);
  } else {
    countries = '';
  }
  return (
    <>
      <FilterForm filter={filter} clickHandle={clickHandle} />
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
  createFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
  cases: state.cases,
});

const mapDispatchToProps = {
  createFilter: filter => createFilter(filter),
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
