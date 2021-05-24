import React from 'react';
import GetStarted from './pages/GetStarted';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Login';

import {RootStackParamList} from './pages/screens/RootStackPrams';

const Stack = createStackNavigator<RootStackParamList>();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={GetStarted} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
