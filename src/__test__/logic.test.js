import { filterResults, eventSource } from '../logic/logic';

const defaultFilter = {
  continent: 'All',
  maxCases: -1,
  minCases: 0,
  maxDeaths: -1,
  minDeaths: 0,
};

describe('test the filterResults function', () => {
  it('should change the continent in the filter correctly', () => {
    const e = {
      target: {
        id: 'continent',
        value: 'Africa',
      },
    };
    const result = eventSource(e, defaultFilter);
    expect(result.continent).toEqual('Africa');
    expect(result.maxCases).toEqual(-1);
    expect(result.minCases).toEqual(0);
    expect(result.maxDeaths).toEqual(-1);
    expect(result.minDeaths).toEqual(0);
  });

  it('should change the maxcases in the filter correctly', () => {
    const e = {
      target: {
        id: 'max-Cases',
        value: '5',
      },
    };
    const result = eventSource(e, defaultFilter);
    expect(result.continent).toEqual('All');
    expect(result.maxCases).toEqual(5);
    expect(result.minCases).toEqual(0);
    expect(result.maxDeaths).toEqual(-1);
    expect(result.minDeaths).toEqual(0);
  });

  it('should change the mincases in the filter correctly', () => {
    const e = {
      target: {
        id: 'min-Cases',
        value: '5',
      },
    };
    const result = eventSource(e, defaultFilter);
    expect(result.continent).toEqual('All');
    expect(result.maxCases).toEqual(-1);
    expect(result.minCases).toEqual(5);
    expect(result.maxDeaths).toEqual(-1);
    expect(result.minDeaths).toEqual(0);
  });

  it('should change the maxdeaths in the filter correctly', () => {
    const e = {
      target: {
        id: 'max-Deaths',
        value: '5',
      },
    };
    const result = eventSource(e, defaultFilter);
    expect(result.continent).toEqual('All');
    expect(result.maxCases).toEqual(-1);
    expect(result.minCases).toEqual(0);
    expect(result.maxDeaths).toEqual(5);
    expect(result.minDeaths).toEqual(0);
  });

  it('should change the mindeaths in the filter correctly', () => {
    const e = {
      target: {
        id: 'min-Deaths',
        value: '5',
      },
    };
    const result = eventSource(e, defaultFilter);
    expect(result.continent).toEqual('All');
    expect(result.maxCases).toEqual(-1);
    expect(result.minCases).toEqual(0);
    expect(result.maxDeaths).toEqual(-1);
    expect(result.minDeaths).toEqual(5);
  });
});

describe('test the filterResults function', () => {
  it('it should return true when the continent = all , max cases and deaths are negative in the filter is all', () => {
    const country = {
      continent: 'Africa',
      confirmed: 500,
      deaths: 10,
    };
    expect(filterResults(country, defaultFilter)).toBeTruthy();
  });

  it('it should return false when the continent is different than the filter and continent is not all', () => {
    const country = {
      continent: 'Africa',
      confirmed: 500,
      deaths: 10,
    };

    const filter = {
      continent: 'Europe',
      maxCases: -1,
      minCases: 0,
      maxDeaths: -1,
      minDeaths: 0,
    };
    expect(filterResults(country, filter)).toBeFalsy();
  });

  it('it should return false when the cases is less than the mincases in filter filter ', () => {
    const country = {
      continent: 'Africa',
      confirmed: 500,
      deaths: 10,
    };

    const filter = {
      continent: 'All',
      maxCases: -1,
      minCases: 600,
      maxDeaths: -1,
      minDeaths: 0,
    };
    expect(filterResults(country, filter)).toBeFalsy();
  });

  it('it should return false when the cases is more than the maxcases in filter filter ', () => {
    const country = {
      continent: 'Africa',
      confirmed: 500,
      deaths: 10,
    };

    const filter = {
      continent: 'All',
      maxCases: 100,
      minCases: 0,
      maxDeaths: -1,
      minDeaths: 0,
    };
    expect(filterResults(country, filter)).toBeFalsy();
  });

  it('it should return false when the deaths is less than the mindeaths in filter filter ', () => {
    const country = {
      continent: 'Africa',
      confirmed: 500,
      deaths: 10,
    };

    const filter = {
      continent: 'All',
      maxCases: -1,
      minCases: 600,
      maxDeaths: -1,
      minDeaths: 20,
    };
    expect(filterResults(country, filter)).toBeFalsy();
  });

  it('it should return false when the deaths is more than the maxdeaths in filter filter ', () => {
    const country = {
      continent: 'Africa',
      confirmed: 500,
      deaths: 10,
    };

    const filter = {
      continent: 'All',
      maxCases: -1,
      minCases: 0,
      maxDeaths: 5,
      minDeaths: 0,
    };
    expect(filterResults(country, filter)).toBeFalsy();
  });
});
