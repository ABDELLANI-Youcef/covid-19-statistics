import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const List = ({ filter }) => (
  <div>
    <p>
      Hello world in our application!
    </p>
    <p>
      {filter}
    </p>
    <Link to={{ pathname: '/country', state: { country: 'palestine' } }}>More details</Link>
  </div>
);

List.propTypes = {
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps)(List);
