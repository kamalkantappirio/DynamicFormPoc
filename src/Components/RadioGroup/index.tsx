import React, { useState } from 'react';

import RadioComponent from './RadioComponent';

interface RadioOptionProps {
    label: string,
    value: string,
    selected: boolean
}

interface RadioProps {
    Placeholder: string,
    Name: string,
    Input_type: string,
    Required: boolean,
    options: RadioOptionProps[],
    Wep_api: string,
    IsSingleSelect: boolean,
    DependentValue: string
    validation : string
}

interface Props {
    RadioData: RadioProps,
    orientation: 'horizontal' | 'vertical'
}

const RadioGroup: React.FC<Props> = ({ RadioData }: Props) => {

    const [RadioOptions, setRadioOptions] = useState(RadioData.options);

    const handleRadio = (label: string) => {
        let RadioOptionsCopy: RadioOptionProps[] = [...RadioOptions];
        const index = RadioOptionsCopy.findIndex((item: RadioOptionProps) => item.value === label);

        RadioOptionsCopy.map((items: RadioOptionProps, key: number) => {
            if (index === key) {
                return items.selected = !items.selected;
            } else if (items.selected) {
                return items.selected = !items.selected;
            }
        })

        setRadioOptions(RadioOptionsCopy);
    }

    const radioElement = () => {
        return (
            RadioOptions.map((items: RadioOptionProps, key: number) => (<RadioComponent key={key} value={items.value} name={items.label} selected={items.selected} _handleChange={handleRadio} />)))
    }

    return (
        <>
            {radioElement()}
        </>
    )
}

export default RadioGroup;