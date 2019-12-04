import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Modal
} from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DateTimePickerProps {
    onChange: Function;
    mode: 'date' | 'time' | 'datetime';
    label: string;
    value: Date;
}

export const DateTimePickerComponent: React.SFC<DateTimePickerProps> = (props) => {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(props.value)
    const current_date = () => {
        switch (props.mode) {
            case 'datetime':
                return moment(selectedDate).format('DD/MM/YYYY HH:mm:ss');
            case 'date':
                return moment(selectedDate).format('DD/MM/YYYY');
            case 'time':
                return moment(selectedDate).format('HH:mm:ss');
            default:
                return moment(selectedDate).format('DD/MM/YYYY HH:mm:ss');
        }
    }

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.label}>{props.label}</Text>
                <TouchableOpacity
                    style={styles.dateContainer}
                    onPress={() => setShowDatePicker(true)}
                >
                    <Text>{current_date()} </Text>
                </TouchableOpacity>
            </View>
            <Modal visible={showDatePicker} animationType="slide">
                <View style={styles.pickerView}>
                    <View style={styles.pickerButtons}>
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedDate(props.value);
                                setShowDatePicker(false)
                            }}
                        >
                            <Text style={styles.actionButtons}>Done</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                setShowDatePicker(false)
                            }}
                        >
                            <Text style={styles.actionButtons}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.datePicker}>
                        <DateTimePicker
                            value={props.value}
                            mode={props.mode}
                            onChange={(event, date) => {
                                props.onChange(date)
                            }
                            } />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10
    },
    dateContainer: {
        height: 40,
        width: 300,
        padding: 8,
    },
    label: {
        padding: 8,
        fontSize: 15,
        fontWeight: 'bold'
    },
    pickerView: {
        flexDirection: 'column',
        flex: 1,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    pickerButtons: {
        flexDirection: 'row',
        flex: 0.2,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    datePicker: {
        flex: 0.8,
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    actionButtons: {
        color: '#33A2FF',
        fontSize: 20,
        padding: 50
    }
})

export default DateTimePickerComponent;