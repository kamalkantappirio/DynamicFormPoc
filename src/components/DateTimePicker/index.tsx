import React, { useState } from 'react';
import { 
    DatePickerIOS, 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableOpacity,
    Modal
} from 'react-native';
import moment from 'moment';

interface DateTimePickerProps {
    onChange: Function;
    date: Date;
    mode: 'date' | 'time' | 'datetime';
    initialDate: Date;
    label: string;
}

export const DateTimePickerComponent: React.SFC<DateTimePickerProps> = (props) => {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(props.date)

    const date = props.mode === 'datetime' ? moment(selectedDate).format('DD/MM/YYYY HH:mm:ss'):
     props.mode === 'date' ?  moment(selectedDate).format('DD/MM/YYYY') :
     moment(selectedDate).format('HH:mm:ss')


    return (
        <View>
            { !showDatePicker &&
               <View style = {styles.container}>
                    <Text style = {styles.label}>{props.label}</Text>
                    <TouchableOpacity 
                        style={styles.dateContainer}
                        onPress={() => setShowDatePicker(true)}
                    >
                   <Text>{date} </Text>
               </TouchableOpacity>
               {showDatePicker}
           </View>
            }
            <Modal visible={showDatePicker} animationType="slide">
                <View>
                    <Button
                        title="Done"
                        onPress={() => setShowDatePicker(false)}
                    />
                    <DatePickerIOS
                        {...props}
                        date = {selectedDate}
                        onDateChange={(date) =>  { 
                            setSelectedDate(date);
                            props.onChange(date);
                        } }
                    />
                </View>
            </Modal>
        </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop: 10
    },
    dateContainer: {
        height: 40, 
        width: 300, 
        padding: 8, 
    },
    label:{
        padding: 8,
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default DateTimePickerComponent;