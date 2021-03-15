import React from 'react';
import renderer from 'react-test-renderer';
import {
  BrowserRouter,
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import FilterForm from '../components/FilterForm';
import GlobalDetail from '../components/GeneralDetail';
import GlobalInformations from '../components/GlobalInformations';
import CountryItem from '../components/CountryItem';
import DeathsHistory from '../components/DeathsHistory';
import ConfirmedHistory from '../components/ConfirmedHistory';

it('should render the Filter Form correctly', () => {
  const filter = {
    continent: 'All',
    maxCases: -1,
    minCases: 0,
    maxDeaths: -1,
    minDeaths: 0,
  };
  const navbar = renderer.create(
    <FilterForm filter={filter} clickHandle={() => true} />,
  ).toJSON();
  expect(navbar).toMatchSnapshot();
});

it('should render the Navbar correctly', () => {
  const navbar = renderer.create(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  ).toJSON();
  expect(navbar).toMatchSnapshot();
});

it('should return the GlobalDetail correctly', () => {
  const algeriaInfons = {
    confirmed: 115265,
    recovered: 79887,
    deaths: 3036,
    country: 'Algeria',
    population: 41318142,
    sq_km_area: 2381741,
    life_expectancy: '69.7',
    elevation_in_meters: 800,
    continent: 'Africa',
    abbreviation: 'DZ',
    location: 'Northern Africa',
    iso: 12,
    capital_city: 'Alger',
    lat: '28.0339',
    long: '1.6596',
    updated: '2021/03/15 18:27:18+00',
  };

  const globalDetail = renderer.create(
    <GlobalDetail country={algeriaInfons} />,
  ).toJSON();
  expect(globalDetail).toMatchSnapshot();
});

it('should return GlobalInformations correctly', () => {
  const world = {
    population: 7444509223,
    confirmed: 120096586,
    recovered: 68065974,
    deaths: 2657501,
  };
  const globalInformations = renderer.create(
    <GlobalInformations world={world} />,
  ).toJSON();
  expect(globalInformations).toMatchSnapshot();
});

it('should return the CountryItem correctly', () => {
  const algeriaInfons = {
    confirmed: 115265,
    recovered: 79887,
    deaths: 3036,
    country: 'Algeria',
    population: 41318142,
    sq_km_area: 2381741,
    life_expectancy: '69.7',
    elevation_in_meters: 800,
    continent: 'Africa',
    abbreviation: 'DZ',
    location: 'Northern Africa',
    iso: 12,
    capital_city: 'Alger',
    lat: '28.0339',
    long: '1.6596',
    updated: '2021/03/15 18:27:18+00',
  };
  const countryItem = renderer.create(
    <BrowserRouter>
      <CountryItem country={algeriaInfons} name="Algeria" />
    </BrowserRouter>,
  ).toJSON();
  expect(countryItem).toMatchSnapshot();
});

it('should return DeathsHistory correctly', () => {
  const country = {
    dates: {
      '2021-03-14': 3036,
      '2021-03-13': 3034,
      '2021-03-12': 3031,
      '2021-03-11': 3028,
      '2021-03-10': 3026,
      '2021-03-09': 3022,
      '2021-03-08': 3018,
      '2021-03-07': 3013,
      '2021-03-06': 3010,
      '2021-03-05': 3007,
      '2021-03-04': 3002,
      '2021-03-03': 2996,
      '2021-03-02': 2991,
      '2021-03-01': 2987,
      '2021-02-28': 2983,
      '2021-02-27': 2979,
      '2021-02-26': 2977,
      '2021-02-25': 2973,
      '2021-02-24': 2970,
      '2021-02-23': 2967,
      '2021-02-22': 2964,
      '2021-02-21': 2961,
      '2021-02-20': 2958,
      '2021-02-19': 2954,
      '2021-02-18': 2950,
      '2021-02-17': 2947,
      '2021-02-16': 2945,
      '2021-02-15': 2943,
      '2021-02-14': 2939,
      '2021-02-13': 2935,
    },
  };

  const deathsHistory = renderer.create(
    <DeathsHistory country={country} />,
  ).toJSON();
  expect(deathsHistory).toMatchSnapshot();
});

it('should return ConfirmedHistory correctly', () => {
  const country = {
    dates: {
      '2021-03-14': 115265,
      '2021-03-13': 115143,
      '2021-03-12': 115008,
      '2021-03-11': 114851,
      '2021-03-10': 114681,
      '2021-03-09': 114543,
      '2021-03-08': 114382,
      '2021-03-07': 114234,
      '2021-03-06': 114104,
      '2021-03-05': 113948,
      '2021-03-04': 113761,
      '2021-03-03': 113593,
      '2021-03-02': 113430,
      '2021-03-01': 113255,
      '2021-02-28': 113092,
      '2021-02-27': 112960,
      '2021-02-26': 112805,
      '2021-02-25': 112622,
      '2021-02-24': 112461,
      '2021-02-23': 112279,
      '2021-02-22': 112094,
      '2021-02-21': 111917,
      '2021-02-20': 111764,
      '2021-02-19': 111600,
      '2021-02-18': 111418,
      '2021-02-17': 111247,
      '2021-02-16': 111069,
      '2021-02-15': 110894,
      '2021-02-14': 110711,
      '2021-02-13': 110513,
    },
  };

  const confirmedHistory = renderer.create(
    <ConfirmedHistory country={country} />,
  ).toJSON();
  expect(confirmedHistory).toMatchSnapshot();
});
