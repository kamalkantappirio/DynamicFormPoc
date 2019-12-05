import React, {useState} from 'react';

import RadioComponent from '../Components/RadioGroup/RadioComponent';

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

const DropdownGroup: React.FC<Props> = ({
  checkBoxData,
  setSelectedProcedure,
}: Props) => {
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
