import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CountryItem from '../components/CountryItem';
import FilterForm from '../components/FilterForm';
import GlobalInformations from '../components/GlobalInformations';
import { createFilter } from '../actions/index';

const List = ({ filter, cases, createFilter }) => {
  let countries = Object.keys(cases);
  const clickHandle = newFilter => {
    createFilter(newFilter);
  };

  countries = Object.entries(cases).filter(row => {
    const c = row[1].All;
    return (c.continent === filter.continent || filter.continent === 'All')
            && (filter.maxCases < 0 || c.confirmed <= filter.maxCases)
            && (filter.minCases === 0 || c.confirmed >= filter.minCases)
            && (filter.maxDeaths < 0 || c.deaths <= filter.maxDeaths)
            && (filter.minDeaths === 0 || c.deaths >= filter.minDeaths);
  })
    .map(e => e[0]);

  if (countries.length > 0) {
    countries = countries.map(place => <CountryItem key={place} country={place} />);
  } else {
    countries = null;
  }
  const world = countries !== null ? <GlobalInformations world={cases.Global.All} /> : null;
  return (
    <>
      <FilterForm filter={filter} clickHandle={clickHandle} />
      {world}
      <p>
        {filter.continent}
      </p>
      <Link to={{ pathname: '/country', state: { country: 'palestine' } }}>More details</Link>
      {countries}
    </>
  );
};

List.propTypes = {
  filter: PropTypes.objectOf(PropTypes.any).isRequired,
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
