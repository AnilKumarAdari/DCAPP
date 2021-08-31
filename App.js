/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import Login from './src/screens/auth/Login';

const App = () => {
  return (
      <Login/>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
  },
 image:{
  height:90,
  width:90,
  alignSelf:'center',
  marginTop:'20%',
  marginBottom:'-10%'
}
});

export default App;
