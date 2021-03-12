import { CREATE_CASE, createCase } from '../actions/index';

const defaultCases = {};

export const gatherCasesInformations = async store => {
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch('https://covid-api.mmediagroup.fr/v1/cases', options);
    const data = await response.json();
    store.dispatch(createCase(data));
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export const casesReducer = (state = defaultCases, action) => {
  switch (action.type) {
    case CREATE_CASE:
      return action.payload;

    default:
      return state;
  }
};
