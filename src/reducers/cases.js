import {
  CREATE_CASE, CREATE_HISTORY_CONFIRMED, CREATE_HISTORY_DEATHS,
} from '../actions/index';

const defaultCases = {};

export const gatherCasesInformations = async actionCreator => {
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
    actionCreator(data);
  } catch (error) {
    actionCreator(error);
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

export const deathsHistoryReducer = (state = defaultCases, action) => {
  switch (action.type) {
    case CREATE_HISTORY_DEATHS:
      return action.payload;

    default:
      return state;
  }
};

export const confirmedHistoryReducer = (state = defaultCases, action) => {
  switch (action.type) {
    case CREATE_HISTORY_CONFIRMED:
      return action.payload;

    default:
      return state;
  }
};
