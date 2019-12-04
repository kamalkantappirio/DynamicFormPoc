import React from './node_modules/react';
import { StyleSheet } from 'react-native';

import { CheckBox, Text, View } from 'native-base';


interface Props {
    name: string;
    value: string;
    selected: boolean;
    _handleChange(arg: string): any;
}

const CheckBoxComponent = ({ name, selected, value, _handleChange }: Props) => {
    return (
        <View style={styles.root}>
            <Text style={styles.label}>{name}</Text>
            <CheckBox
                onPress={() => _handleChange(value)}
                checked={selected}
            />
        </View>
    );
}

export default CheckBoxComponent;

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10
    },
    label: {
        width: 100
    }
})