import { CREATE_FILTER } from '../actions/index';

const defaultFilter = {
  continent: 'All',
  maxCases: -1,
  minCases: 0,
  maxDeaths: -1,
  minDeaths: 0,
};
const filterReducer = (state = defaultFilter, action) => {
  switch (action.type) {
    case CREATE_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
