import React, { useState } from 'react';

import RadioComponent from './RadioComponent';

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
    options: CheckBoxOptionProps[],
    Wep_api: string,
    IsSingleSelect: boolean,
    DependentValue: string
}

interface Props {
    checkBoxData: CheckBoxProps,
    orientation: 'horizontal' | 'vertical'
}

const RadioGroup: React.FC<Props> = ({ checkBoxData }: Props) => {

    const [checkBoxOptions, setCheckBoxOptions] = useState(checkBoxData.options);

    const handleCheckBox = (label: string) =>{
        let checkBoxOptionsCopy: CheckBoxOptionProps[] = [...checkBoxOptions];
        const index = checkBoxOptionsCopy.findIndex((item: CheckBoxOptionProps) => item.value === label);

        checkBoxOptionsCopy.map((items: CheckBoxOptionProps, key: number) => {
            if (index === key) {
                return items.selected = !items.selected;
            } else if (items.selected) {
                return items.selected = !items.selected;
            }
        })

        setCheckBoxOptions(checkBoxOptionsCopy);
    }

    const checkBoxElement = () => {
        return (
            checkBoxOptions.map((items: CheckBoxOptionProps, key: number) => (<RadioComponent key={key} value={items.value} name={items.label} selected={items.selected} _handleChange={handleCheckBox} />)))
    }

    return (
        <>
            {checkBoxElement()}
        </>
    )
}

export default RadioGroup;