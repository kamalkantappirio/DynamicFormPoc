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


export interface State {
  email: string;
  password: string
}


export default class Login extends React.Component<Props, State> {

  state={
    email: '',
    password:''
  }

  handleLogin = () =>{
    const { email, password } = this.state;
    console.log('email--->', email);
    console.log('password--->', password);
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(value) => this.setState({email: value})}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(value) => this.setState({password: value})}
              value={password}
            />
            <TouchableOpacity onPress={this.handleLogin}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </View>
            </TouchableOpacity>
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