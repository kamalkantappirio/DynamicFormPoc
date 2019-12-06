import React, {useState, useEffect} from 'react';

import RadioComponent from '../Components/RadioGroup/RadioComponent';
import {CheckBoxProps, CheckBoxOptionProps, CountryListProps} from './types';
import axios from 'axios';

interface Props {
  data: CheckBoxProps;
  orientation?: 'horizontal' | 'vertical';
  color?: '';
  setSelectedProcedure: Function;
  countryName: string;
}

const DropdownGroup: React.FC<Props> = ({
  data,
  setSelectedProcedure,
  countryName,
}: Props) => {
  const [checkBoxOptions, setCheckBoxOptions] = useState(data.options);

  const getDataFromService = (countryName: string) => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(res => {
        const dropdownOptions = res.data.map((items: CountryListProps) => {
          const currencies = items.currencies;
          return {
            label: items.name,
            currency: currencies && currencies[0].code,
            value: items.alpha3Code,
            selected: false,
          };
        });
        setCheckBoxOptions(dropdownOptions); // Setting the checkbox option using hooks
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataFromService(countryName);
  }, [countryName]); // This API will only call whenever country name is changed

  const handleCheckBox = (label: string) => {
    let checkBoxOptionsCopy: CheckBoxOptionProps[] = [...checkBoxOptions];
    const index = checkBoxOptionsCopy.findIndex(
      (item: CheckBoxOptionProps) => item.value === label,
    );
    checkBoxOptionsCopy[index].selected = !checkBoxOptionsCopy[index].selected;
    setCheckBoxOptions(checkBoxOptionsCopy);
    setSelectedProcedure(checkBoxOptions);
  };

  const radioElement = () => {
    return checkBoxOptions.map((items: CheckBoxOptionProps, key: number) => (
      <RadioComponent
        key={key}
        value={items.value}
        name={items.label}
        selected={items.selected}
        _handleChange={handleCheckBox}
      />
    ));
  };

  return <>{radioElement()}</>;
};

export default DropdownGroup;
