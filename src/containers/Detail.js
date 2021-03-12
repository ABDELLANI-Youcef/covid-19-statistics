import PropTypes from 'prop-types';

const Detail = ({ location }) => (
  <div>
    <p>
      Hello world in our application! this is a Detail page concerning
      {' '}
      {location.state.country}
    </p>
  </div>
);

Detail.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Detail;
