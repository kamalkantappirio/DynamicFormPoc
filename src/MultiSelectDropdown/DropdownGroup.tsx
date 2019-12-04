import React, {useState} from 'react';

import CheckBoxComponent from '../Components/CheckBoxGroup/CheckBoxComponent';

interface CheckBoxOptionProps {
  label: string;
  value: string;
  selected: boolean;
}

interface CheckBoxProps {
  Placeholder: string;
  Name: string;
  Input_type: string;
  options: CheckBoxOptionProps[];
  IsSingleSelect: boolean;
  DependentValue: string;
}

interface Props {
  checkBoxData: CheckBoxProps;
  setSelectedProcedure: Function;
}

const DropdownGroup: any = ({checkBoxData, setSelectedProcedure}: Props) => {
  const [checkBoxOptions, setCheckBoxOptions] = useState(checkBoxData.options);

  function handleCheckBox(label: string) {
    let checkBoxOptionsCopy: CheckBoxOptionProps[] = [...checkBoxOptions];
    const index = checkBoxOptionsCopy.findIndex(
      (item: CheckBoxOptionProps) => item.value === label,
    );
    checkBoxOptionsCopy[index].selected = !checkBoxOptionsCopy[index].selected;
    setCheckBoxOptions(checkBoxOptionsCopy);
    setSelectedProcedure(checkBoxOptions);
  }

  return checkBoxOptions.map((items: CheckBoxOptionProps, key: number) => {
    return (
      <CheckBoxComponent
        key={key}
        value={items.value}
        name={items.label}
        selected={items.selected}
        _handleChange={handleCheckBox}
      />
    );
  });
};

export default DropdownGroup;