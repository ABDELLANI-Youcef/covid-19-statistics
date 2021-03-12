const CREATE_FILTER = 'CREATE_FILTER';
const createFilter = filter => ({
  type: CREATE_FILTER,
  payload: filter,
});

export { CREATE_FILTER, createFilter };
