import React, { useState } from 'react';
import { DatePickerIOS, View, Text, StyleSheet } from 'react-native';
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
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <View>
            {showDatePicker ?
                <DatePickerIOS
                    {...props}
                    date = {selectedDate}
                    onDateChange={(date) =>  { 
                        setSelectedDate(date);
                        setShowDatePicker(false)
                    } }
                /> 
              :
               <View>
               <Text>Visit Date</Text>
               <TouchableOpacity style={styles.dateContainer}
                                 onPress={() => setShowDatePicker(true)}>
                   <Text>{moment(selectedDate).format('DD/MM/YYYYHH:mm:ss')}</Text>
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