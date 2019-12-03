import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import WelcomeScreen from './src/Welcome';
import LoginScreen from './src/Login'

const MainNavigator = createStackNavigator({
  Welcome: {screen: WelcomeScreen},
  Login: {screen: LoginScreen,},
});

const App = createAppContainer(MainNavigator);

export default App;