import React, { useState } from 'react';
import { DatePickerIOS, View, Text, StyleSheet, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
var moment = require('moment');

interface DateTimePickerProps {
    onChange: Function;
    date: Date;
    mode: 'date' | 'time' | 'datetime';
    initialDate: Date
}

export const DateTimePickerComponent: React.SFC<DateTimePickerProps> = (props) => {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(props.date)

    return (
        <View>
            {showDatePicker ?
            <View>
                <Button
                    title="Done"
                    onPress={() => setShowDatePicker(false)}/>
                <DatePickerIOS
                    {...props}
                    date = {selectedDate}
                    onDateChange={(date) =>  { 
                        setSelectedDate(date);
                        props.onChange(date);
                    } }/>
                </View>
              :
               <View>
               <Text>Visit Date</Text>
               <TouchableOpacity style={styles.dateContainer}
                                 onPress={() => setShowDatePicker(true)}>
                   <Text>{props.mode === 'datetime' ? moment(selectedDate).format('DD/MM/YYYYHH:mm:ss'):
                          props.mode === 'date' ?  moment(selectedDate).format('DD/MM/YYYY') :
                        moment(selectedDate).format('HH:mm:ss')
                }</Text>
               </TouchableOpacity>
               {showDatePicker}
           </View>
            }
        </View> 
    )
}

const styles = StyleSheet.create({
    dateContainer: {
        height: 40, 
        width: 300, 
        padding: 4, 
        borderColor: 'gray', 
        borderWidth: 1
    },
})

export default DateTimePickerComponent;