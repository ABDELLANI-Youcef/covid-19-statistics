export const gatherCasesInformations = async () => {
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
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export const casesReducer = () => {
  console.log('hello');
};
