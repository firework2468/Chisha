/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StackNavigator from "react-navigation";
import Homepage from "./js/pages/Homepage";
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


AppRegistry.registerComponent('abc', () => App);
