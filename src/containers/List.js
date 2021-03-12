import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const List = ({ filter }) => (
  <div>
    <p>
      Hello world in our application!
    </p>
    <p>
      {filter}
    </p>
  </div>
);

List.propTypes = {
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  filter: state,
});

export default connect(mapStateToProps)(List);
