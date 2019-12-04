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

    const updatedCheckBoxOptions = checkBoxData.Options.map(items => ({...items, selected: false}))

    const [checkBoxOptions, setCheckBoxOptions] = useState(updatedCheckBoxOptions);

    function handleCheckBox(label: string) {
        let checkBoxOptionsCopy: CheckBoxOptionProps[] = [...checkBoxOptions];
        let index = checkBoxOptionsCopy.findIndex((item: CheckBoxOptionProps) => item.value === label);

        checkBoxOptionsCopy.map((items: CheckBoxOptionProps, key: number) => {
            if (index === key) {
                return items.selected = !items.selected;
            } else {
                if (items.selected) {
                    return items.selected = !items.selected;
                }
            }
        })

        setCheckBoxOptions(checkBoxOptionsCopy);
    }

    return (
        checkBoxOptions.map((items: CheckBoxOptionProps, key: number) => {
            return <CheckBoxComponent key={key} value={items.value} name={items.label} selected={items.selected} _handleChange={handleCheckBox} />
        }))
}

export default CheckBoxGroup;