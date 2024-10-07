/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import AuthScreen from './screens/AuthScreen';
import WeatherScreen from './screens/WeatherScreen';
import MoviesScreen from './screens/MoviesScreen';
import MainScreen from './screens/MainScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="MainScreen"
          screenOptions={({route}) => ({headerShown: false})}>
          <Tab.Screen name="Main" component={MainScreen} />
          <Tab.Screen name="Weather" component={WeatherScreen} />
          <Tab.Screen name="Movies" component={MoviesScreen} />
          <Tab.Screen name="Auth" component={AuthScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
