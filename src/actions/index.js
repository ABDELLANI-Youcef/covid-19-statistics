const CREATE_FILTER = 'CREATE_FILTER';
const CREATE_CASE = 'CREATE_CASE';
const CREATE_HISTORY_DEATHS = 'CREATE_HISTORY_DEATHS';
const CREATE_HISTORY_CONFIRMED = 'CREATE_HISTORY_CONFIRMED';

const createFilter = filter => ({
  type: CREATE_FILTER,
  payload: filter,
});

const createCase = cases => ({
  type: CREATE_CASE,
  payload: cases,
});

const createHistoryDeaths = deaths => ({
  type: CREATE_HISTORY_DEATHS,
  payload: deaths,
});
const createHistoryConfirmed = confirmed => ({
  type: CREATE_HISTORY_CONFIRMED,
  payload: confirmed,
});

export {
  CREATE_FILTER, createFilter, CREATE_CASE, createCase, CREATE_HISTORY_DEATHS,
  CREATE_HISTORY_CONFIRMED, createHistoryDeaths, createHistoryConfirmed,
};
