import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity, Dimensions, FlatList, Alert, Modal} from 'react-native';
import Random from './Random';

export default class Add extends Component {
    static navigationOptions = {title: '换肤',};

    render() {
        const {navigation} = this.props;
        return (
            <View>
                <TouchableOpacity>
                    <Text>添加图片</Text>
                </TouchableOpacity>
            </View>
        )
    }
}