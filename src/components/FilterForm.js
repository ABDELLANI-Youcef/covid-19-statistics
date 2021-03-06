import PropTypes from 'prop-types';
import styles from '../styles/FilterForm.module.css';
import { eventSource } from '../logic/logic';

const continents = ['All', 'Africa', 'Asia', 'North America', 'South America', 'Oceania', 'Europe'];
const FilterForm = ({ clickHandle, filter }) => {
  const changeHandle = e => {
    clickHandle(
      eventSource(e, filter),
    );
  };
  return (
    <form className={styles.filterForm}>
      <label htmlFor="continent">
        Continent:
        {' '}
        <select id="continent" name="continent" value={filter.continent} onChange={changeHandle}>
          {continents.map(con => (
            <option value={con} key={con}>{con}</option>
          ))}
        </select>
      </label>

      <div className={styles.infoType}>
        <label htmlFor="min-Cases">
          <span className={styles.input_label}>
            Minimun number of cases:
          </span>
          <input type="number" id="min-Cases" name="min-Cases" value={filter.minCases} onChange={changeHandle} />
        </label>

        <label htmlFor="max-Cases">
          <span className={styles.input_label}>
            Maximun number of cases:
          </span>
          <input type="number" id="max-Cases" name="max-Cases" value={filter.maxCases} onChange={changeHandle} />
        </label>
      </div>

      <div className={styles.infoType}>

        <label htmlFor="min-Deaths">
          <span className={styles.input_label}>
            Minimun number of deaths:
          </span>
          <input type="number" id="min-Deaths" name="min-Deaths" value={filter.minDeaths} onChange={changeHandle} />
        </label>

        <label htmlFor="max-Deaths">
          <span className={styles.input_label}>
            Maximun number of deaths:
          </span>
          <input type="number" id="max-Deaths" name="max-Deaths" value={filter.maxDeaths} onChange={changeHandle} />
        </label>
      </div>

    </form>
  );
};

FilterForm.propTypes = {
  clickHandle: PropTypes.func.isRequired,
  filter: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FilterForm;
