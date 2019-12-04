import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  DatePickerIOS
} from 'react-native';
import { Formik, FormikProps } from "formik";
import DateTimePickerComponent from './Components/DateTimePicker'
import CheckBoxGroup from './Components/CheckBoxGroup'
import Button from './Components/Button';


import { FORM_INPUT_TYPE } from './Constants.js';

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
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center'
}

const buttonTextStyle = {
  color: '#ffffff',
  fontWeight: '500'
}

export default class CreateEventForm extends React.Component<Props> {

  handleSubmit = () => {
    console.log('kamal')
  };

  state = {
    date: new Date()
  }

  onSetDate = (date: Date) => {
    console.log(date);
  }

  renderForm = ({
    values,
    setFieldValue,
    touched,
    errors,
    setFieldTouched,
    isSubmitting
  }: FormikProps<FormValues>) => {

    const formJoson = this.props.navigation.state.params.formJoson;
    return (
      <View style={styles.container}>
        {formJoson.fields.map((item: any, index: number) => {

          switch (item.input_type ){
            case FORM_INPUT_TYPE.CHECKBOX_GROUP:
              return (
                <View></View>
            )
            case FORM_INPUT_TYPE.DATE_TIME:
              return (
              <DateTimePickerComponent
                initialDate = {new Date()}
                date={this.state.date}
                mode={'date'}
                onChange={this.onSetDate} />
            )
          }
        })
        }
        <Button
          title='Submit'
          buttonStyle={buttonStyle}
          buttonTextStyle={buttonTextStyle}
          onClick={this.handleSubmit}
        />
      </View>
    )
  };

  render() {
    const formJoson = this.props.navigation.state.params.formJoson;
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={() => { }}
        render={(formikBag: FormikProps<FormValues>) => this.renderForm(formikBag)}
      />
    );
  }

}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-evenly",
    // alignItems: "center"
  },

  loginButtonContainer: {
    width: 200
  },
  loginButton: {
    backgroundColor: 'blue'
  },
  loginButtonTitle: {
    color: "white",
    fontWeight: '500'
  },
  disabled: {
    backgroundColor: 'blue',
    opacity: 0.3
  }
});