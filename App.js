/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderComponent from './src/components/HeaderComponent'

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
});


const App = () => (
    <HeaderComponent/>
);


export default App;


