import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import WelcomeScreen from './src/Welcome';
import LoginScreen from './src/Login'
import CreateEventForm from './src/CreateEventForm'

const MainNavigator = createStackNavigator({
  Welcome: {screen: WelcomeScreen},
  Login: {screen: LoginScreen},
  CreateEventForm: {screen: CreateEventForm},
});

const App = createAppContainer(MainNavigator);

export default App;