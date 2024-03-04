

import React from 'react';

import {
  SafeAreaView, StyleSheet,

} from 'react-native';

import MainNavigator from './navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';




const App = () => {

  return (
    <NavigationContainer>

      <MainNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
