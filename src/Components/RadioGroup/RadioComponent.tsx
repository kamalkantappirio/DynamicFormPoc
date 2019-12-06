import React from 'react';
import {StyleSheet} from 'react-native';

import {CheckBox, Text, View} from 'native-base';

interface Props {
  name: string;
  value: string;
  selected: boolean;
  _handleChange(arg: string): any;
}

const RadioComponent: React.FC<Props> = ({
  name,
  selected,
  value,
  _handleChange,
}: Props) => {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>{name}</Text>
      <CheckBox
        style={styles.radioButton}
        onPress={() => _handleChange(value)}
        checked={selected}
      />
    </View>
  );
};

export default RadioComponent;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
    margin: 5,
    justifyContent: 'space-between',
  },
  label: {
    textAlign: 'left',
  },
  radioButton: {
    alignSelf: 'flex-end',
  },
});
