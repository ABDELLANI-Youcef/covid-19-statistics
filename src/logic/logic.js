const eventSource = (e, filter) => {
  let {
    continent, maxCases, minCases, maxDeaths, minDeaths,
  } = filter;
  const { value } = e.target;
  switch (e.target.id) {
    case 'min-Cases':
      minCases = parseInt(value, 10);
      break;

    case 'max-Cases':
      maxCases = parseInt(value, 10);
      break;

    case 'min-Deaths':
      minDeaths = parseInt(value, 10);
      break;

    case 'max-Deaths':
      maxDeaths = parseInt(value, 10);
      break;

    default:
      continent = value;
      break;
  }

  return {
    continent, maxCases, minCases, maxDeaths, minDeaths,
  };
};

export default eventSource;
