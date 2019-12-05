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
import {Formik, FormikProps} from 'formik';
import {MultiSelectDropdownComponent} from './MultiSelectDropdown';

import Dropdown from './Components/Dropdown'
import DateTimePickerComponent from './Components/DateTimePicker'
import RadioGroup from './Components/RadioGroup'
import Button from './Components/Button';


import { FORM_INPUT_TYPE } from './Constants';

interface FormValues {
  email: string;
  password: string;
}

export interface Props {
  navigation: any;
}

interface State {
  date: Date
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

export default class CreateEventForm extends React.Component<Props, State> {

  handleSubmit = () => {
    console.log('kamal')
  };

  state = {
    date: new Date('2020-06-12T14:42:42')
  }

  onSetDate = (date: Date) => {
    this.setState({
      date: date
    })
  }
 selectedItem = (checkBoxData: []) => {
    // const updatedCheckBoxOptions = checkBoxData.map(items => ({
    //   ...items,
    //   selected: false,
    // }));
    // checkBoxData.Options = updatedCheckBoxOptions;
  };

// get dropdown selected value
  getDropdownSelectedValue = (selectedValue: any, formItem: any) => {
    // console.log(selectedValue, formItem)
  }

  hideDropdownModal = () => {};

  renderForm = ({
    values,
    setFieldValue,
    touched,
    errors,
    setFieldTouched,
    isSubmitting,
  }: FormikProps<FormValues>) => {
    const formJoson = this.props.navigation.state.params.formJoson;
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" >
          <View style={styles.container}>
            {formJoson.fields.map((item: any, index: number) => {
              switch (item.input_type ){
                case FORM_INPUT_TYPE.DROPDOWN:
                  return (
                    <View key={index}>
                      <Dropdown formItem={item} getSelectedValue={this.getDropdownSelectedValue}/>
                    </View>
                )
                case FORM_INPUT_TYPE.RADIO_GROUP:
                  return (
                    <View key={index}>
                      <RadioGroup orientation={'vertical'} RadioData={item} />
                    </View>
                )
              case FORM_INPUT_TYPE.DATE_TIME:
                return (
                  <View key={index}>
                    <DateTimePickerComponent
                      value={this.state.date}
                      label={item.label}
                      mode={'date'}
                      onChange={this.onSetDate} />
                  </View>
                )
                case FORM_INPUT_TYPE.MULTI_SELECT : 
                return(
                  <MultiSelectDropdownComponent
                    item={item}
                    selectedItem={this.selectedItem}
                    hideDropdownModal={this.hideDropdownModal}
                  />
                )
              }
            })
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
      </ScrollView>
    )
  };

  render() {
    return (
      <Formik initialValues={{ email: '', password: '' }} onSubmit={() => { }}>
        {(formikBag: FormikProps<FormValues>) => this.renderForm(formikBag)}
      </Formik>
    );
  }
}

// styles
const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
