import { CREATE_FILTER } from '../actions/index';

const defaultFilter = 'All';
const filterReducer = (state = defaultFilter, action) => {
  switch (action.type) {
    case CREATE_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
