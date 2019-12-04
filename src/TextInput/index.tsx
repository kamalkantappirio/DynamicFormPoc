import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

interface Props {
  onChangeText: Function;
  item: {
    label: string;
    api_name: string;
    validation: [];
    options: [];
    serviceCallName: any;
    isSingleSelect: boolean;
    dependentValue: string[];
    selectedValues: string;
  };
}

export const InputComponent: React.SFC<Props> = props => {
  return (
    <View style={{flex: 1}}>
      <TextInput
        {...props.item}
        style={styles.input}
        autoCapitalize="none"
        placeholderTextColor="rgba(0, 0, 0, 0.3)"
        underlineColorAndroid="transparent"
        onChangeText={text => props.onChangeText(text)}
      />
    </View>
  );
};
