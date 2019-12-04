import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import { Formik, FormikProps } from "formik";
import Button from './Components/Button';

interface FormValues {
  email: string;
  password: string;
}


export interface Props {
    navigation: any;
}

const buttonStyle = { 
  backgroundColor: '#ff0000',
  width: 100,
  padding:10,
  justifyContent:'center',
  alignItems:'center'
}

const buttonTextStyle ={
  color: '#ffffff',
  fontWeight:'500'
}

export default class CreateEventForm extends React.Component<Props> {

  handleSubmit = () => {
   console.log('kamal')
  };

  renderForm = ({
    values,
    setFieldValue,
    touched,
    errors,
    setFieldTouched,
    isSubmitting
  }: FormikProps<FormValues>) => {

    const formJoson = this.props.navigation.state.params.formJoson;

    // Adding selected key to options for checkbox
    // const updatedCheckBoxOptions = checkBoxData.Options.map(items => ({...items, selected: false}))
    // checkBoxData.Options = updatedCheckBoxOptions;

    return(
    <View style={styles.container}>
      {formJoson.fields.map((item:any) => (<Text>{item.label}</Text>))}
      <Button 
        title='Submit'  
        buttonStyle= { buttonStyle } 
        buttonTextStyle = {buttonTextStyle}
        onClick={this.handleSubmit}
      />
    </View>
  )};

  render() {
    const formJoson = this.props.navigation.state.params.formJoson;
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={() => {}}
        render={(formikBag: FormikProps<FormValues>) => this.renderForm(formikBag)}
      />
    );
  }
  
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  
  loginButtonContainer: {
    width: 200
  },
  loginButton: {
    backgroundColor: 'blue'
  },
  loginButtonTitle: {
    color: "white",
    fontWeight:'500'
  },
  disabled: {
    backgroundColor: 'blue',
    opacity: 0.3
  }
});