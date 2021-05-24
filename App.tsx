import React from 'react';
import GetStarted from './src/pages/GetStarted';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/pages/Login';

import {RootStackParamList} from './src/pages/screens/RootStackPrams';

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
