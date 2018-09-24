//路由页
import {StackNavigator} from 'react-navigation';
import Homepage from '../js/pages/Homepage';
import Setting from '../js/pages/Setting';
import Edit from '../js/pages/Edit';
import Add from '../js/pages/Add';
import Changecolor from '../js/pages/Changecolor'
import {Image, TouchableOpacity} from "react-native";
import React from "react";

export const AppStackNavigator = StackNavigator(
    {
        Home: {screen: Homepage},
        Edit: {screen: Edit},
        Set: {screen: Setting},
        Add: {screen: Add},
        Change: {screen: Changecolor},
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'pink',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            gesturesEnabled: true,
        },
    }
);