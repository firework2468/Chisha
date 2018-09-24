/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Image, StyleSheet, View, Text} from 'react-native';
import StackNavigator from "react-navigation";
import {AppStackNavigator} from './js/AppNavigators' ;

export default AppStackNavigator;

AppRegistry.registerComponent('abc', () => abc);