const CREATE_FILTER = 'CREATE_FILTER';
const CREATE_CASE = 'CREATE_CASE';

const createFilter = filter => ({
  type: CREATE_FILTER,
  payload: filter,
});

const createCase = cases => ({
  type: CREATE_CASE,
  payload: cases,
});

export {
  CREATE_FILTER, createFilter, CREATE_CASE, createCase,
};
