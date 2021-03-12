import PropTypes from 'prop-types';

const continents = ['All', 'Africa'];
const FilterForm = ({ clickHandle, filter }) => {
  const changeHandle = e => {
    clickHandle(e.target.value);
  };
  return (
    <form>
      <select value={filter} onChange={changeHandle}>
        {continents.map(con => (
          <option value={con} key={con}>{con}</option>
        ))}
      </select>
    </form>
  );
};

FilterForm.propTypes = {
  clickHandle: PropTypes.func.isRequired,
  filter: PropTypes.PropTypes.string.isRequired,
};

export default FilterForm;
