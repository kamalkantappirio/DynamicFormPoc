import React, {useState, useEffect} from 'react';
import axios from 'axios';

import RadioComponent from './RadioComponent';
import {Color} from 'csstype';
import {RadioProps, RadioOptionProps, CountryListProps} from './Types';

interface Props {
  data: RadioProps;
  orientation?: 'horizontal' | 'vertical';
  color?: Color;
}

const RadioGroup: React.FC<Props> = ({data}: Props) => {
  const [RadioOptions, setRadioOptions] = useState(data.options);

  const getDataFromService = () => {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        const formattedCountryData = res.data.map((items: CountryListProps) => {
          return {
            label: items.name,
            value: items.alpha3Code,
            selected: false,
          };
        });
        setRadioOptions(formattedCountryData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (RadioOptions && !RadioOptions.length) getDataFromService();
  }, []);

  const handleRadio = (label: string) => {
    let RadioOptionsCopy: RadioOptionProps[] = [...RadioOptions];
    const index = RadioOptionsCopy.findIndex(
      (item: RadioOptionProps) => item.value === label,
    );

    RadioOptionsCopy.map((items: RadioOptionProps, key: number) => {
      if (index === key) {
        return (items.selected = !items.selected);
      } else if (items.selected) {
        return (items.selected = !items.selected);
      }
    });

    setRadioOptions(RadioOptionsCopy);
  };

  const radioElement = () => {
    return RadioOptions.map((items: RadioOptionProps, key: number) => (
      <RadioComponent
        key={key}
        value={items.value}
        name={items.label}
        selected={items.selected}
        _handleChange={handleRadio}
      />
    ));
  };

  return <>{radioElement()}</>;
};

export default RadioGroup;
