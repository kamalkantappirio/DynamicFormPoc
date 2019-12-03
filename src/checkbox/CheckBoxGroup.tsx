import React, { useState } from 'react';

import CheckBoxComponent from './CheckBoxComponent';

interface CheckBoxOptionProps {
    label: string,
    value: string,
    selected: boolean
}

interface CheckBoxProps {
    Placeholder: string,
    Name: string,
    Input_type: string,
    Required: boolean,
    Options: CheckBoxOptionProps[],
    Wep_api: string,
    IsSingleSelect: boolean,
    DependentValue: string
}

interface Props {
    checkBoxData: CheckBoxProps
}

const CheckBoxGroup: any = ({ checkBoxData }: Props) => {

    const [checkBoxOptions, setCheckBoxOptions] = useState(checkBoxData.Options);

    function handleCheckBox(label: string) {
        let checkBoxOptionsCopy: CheckBoxOptionProps[] = [...checkBoxOptions];
        let index = checkBoxOptionsCopy.findIndex((item: CheckBoxOptionProps) => item.value === label);
        checkBoxOptionsCopy[index].selected = !checkBoxOptionsCopy[index].selected;
        setCheckBoxOptions(checkBoxOptionsCopy);
    }

    return (
        checkBoxOptions.map((items: CheckBoxOptionProps, key: number) => {
            return <CheckBoxComponent key={key} value={items.value} name={items.label} selected={items.selected} _handleChange={handleCheckBox} />
        }))
}

export default CheckBoxGroup;