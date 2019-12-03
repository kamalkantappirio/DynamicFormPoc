import React from 'react';
import { DatePickerIOS, View } from 'react-native';

interface DateTimePickerProps {
    onChange: Function;
    date: Date;
    mode: any;
    initialDate: Date
}

export const DateTimePickerComponent: React.SFC<DateTimePickerProps> = (props) => {
    debugger;
    return (
        <View>
            <DatePickerIOS
                {...props}
                onDateChange={(date)=>props.onChange(date)}
            />
        </View>
    )
}
export default DateTimePickerComponent;