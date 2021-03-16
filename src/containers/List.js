import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import CountryItem from '../components/CountryItem';
import FilterForm from '../components/FilterForm';
import GlobalInformations from '../components/GlobalInformations';
import { createFilter, createCase } from '../actions/index';
import { gatherCasesInformations } from '../reducers/cases';
import styles from '../styles/List.module.css';

const List = ({
  filter, cases, createFilter, createCase,
}) => {
  let countries = Object.keys(cases);

  useEffect(() => {
    if (countries === null) {
      gatherCasesInformations(createCase);
    }
  }, []);

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
    countries = countries.filter(e => e !== 'Global').map(place => <CountryItem key={place} country={cases[place].All} name={place} />);
  } else {
    countries = null;
  }
  const world = countries !== null ? <GlobalInformations world={cases.Global.All} /> : null;
  return (
    <>
      <FilterForm filter={filter} clickHandle={clickHandle} />
      {world}
      <div className={styles.list}>
        {countries}
      </div>
    </>
  );
};

List.propTypes = {
  filter: PropTypes.objectOf(PropTypes.any).isRequired,
  cases: PropTypes.objectOf(PropTypes.any).isRequired,
  createFilter: PropTypes.func.isRequired,
  createCase: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
  cases: state.cases,
});

const mapDispatchToProps = {
  createFilter: filter => createFilter(filter),
  createCase,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
