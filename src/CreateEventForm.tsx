import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  StatusBar,
  TouchableOpacity,
  View
} from 'react-native';


export interface Props {
  navigation: any;
}


export default class CreateEventForm extends React.Component<Props> {

  render() {    
    const formJoson = this.props.navigation.state.params.formJoson;
    return (
      <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            
            {formJoson.fields.map((item:any) => (<Text>{item.label}</Text>))}
          </ScrollView>
        </SafeAreaView>
        </>
    );
  }
}

// styles
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FAFAFA',
    padding: 20,
    height: '100%'
  },
  input: {
    height: 40, borderBottomColor:'#000000', borderBottomWidth: 1, padding:5,marginTop:10
  },
  button: {
    backgroundColor: '#ff0000',
    width: '100%',
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  },
  buttonText: {
    color: '#ffffff'
  }
});