import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import ReactPaginate from 'react-paginate';
import CountryItem from '../components/CountryItem';
import FilterForm from '../components/FilterForm';
import GlobalInformations from '../components/GlobalInformations';
import { createFilter, createCase } from '../actions/index';
import { gatherCasesInformations } from '../reducers/cases';
import styles from '../styles/List.module.css';
import { filterResults } from '../logic/logic';

const List = ({
  filter, cases, createFilter, createCase,
}) => {
  let countries = Object.keys(cases);

  useEffect(() => {
    if (Object.keys(cases).length === 0) {
      gatherCasesInformations(createCase);
    }
  }, []);

  const clickHandle = newFilter => { createFilter(newFilter); };

  countries = Object.entries(cases).filter(row => filterResults(row[1].All, filter)).map(e => e[0]);

  const [page, setPage] = useState(0);
  const handlePageClick = data => {
    const { selected } = data;
    setPage(selected);
  };

  if (countries.length > 0) {
    countries = countries.filter(e => e !== 'Global').slice(20 * page, 20 * page + 20).map(place => <CountryItem key={place} country={cases[place].All} name={place} />);
    countries = (
      <div className={styles.list}>
        {countries}
      </div>
    );
  } else {
    countries = (
      <div className={styles.loading}>
        <Loader type="Oval" color="#000000" height={100} width={100} timeout={0} />
      </div>
    );
  }
  const world = Object.keys(cases).length > 0 ? <GlobalInformations world={cases.Global.All} />
    : null;

  return (
    <>
      <FilterForm filter={filter} clickHandle={clickHandle} />
      {world}
      {countries}
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={10}
        initialPage={0}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        subContainerClassName="pages pagination"
        activeClassName={styles.active}
        pageClassName={styles.page}
      />
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
