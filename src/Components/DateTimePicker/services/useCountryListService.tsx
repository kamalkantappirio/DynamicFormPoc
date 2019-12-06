import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { CountryList } from '../types/countryList';

export interface CountryList {
  results: CountryList[];
}

const useCountryListService = () => {
  const [result, setResult] = useState<Service<CountryList>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://api.printful.com/countries')
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useCountryListService;