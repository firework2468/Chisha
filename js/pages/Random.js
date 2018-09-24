import React, {Component} from 'react';
import {AppRegistry, Image, StyleSheet, View, Text, platform, TouchableOpacity, Dimensions} from 'react-native';

var time;
var imageList = [
    require('../../res/images/food/danbaofan.png'),
    require('../../res/images/food/mian1.png'),
    require('../../res/images/food/mian2.png'),
    require('../../res/images/food/niupai.png'),
    require('../../res/images/food/sweet1.png'),
    require('../../res/images/food/sweet2.png'),
    require('../../res/images/food/zhangyu.png'),
    require('../../res/images/food/ea4735fae6cd7b898f649c8d0c2442a7d9330e77.jpg'),
    require('../../res/images/food/fdbdfc039245d6887eac63cca7c27d1ed31b24e8.jpg'),
    require('../../res/images/food/xiaomian.png')
];
var nameList = ['蛋包饭', '拉面', '拉面', '牛排', '纸杯蛋糕', '三角蛋糕', '章鱼小丸子', '甜甜圈', '意面', '小面'];
var image;
var imagename;

export default class Random extends Component {
    constructor(props) {
        super(props);
        this.state = {image: require('../../res/images/food/welcome.png'), name: 'lala', title: 'start'};
        this.change = this.change.bind(this);
    }

    //button点击事件
    change = () => {
        if (this.state.title === 'start') {
            this.random();
            this.setState({title: 'stop'})
        }
        else {
            this.stop();
            this.setState({title: 'start'})
        }
    };
    //start
    random = () => {
        var num = Math.floor(Math.random() * imageList.length);
        image = imageList[num];
        imagename = nameList[num];
        this.setState({image: image, name: imagename});
        time = setTimeout(() => {
            this.random()
        }, 100);
    };
    //stop
    stop = () => {
        clearTimeout(time);
    };

    render() {
        return (
            <View>
                <Image
                    style={styles.images}
                    source={this.state.image}>
                </Image>
                <Text style={styles.name}>
                    {this.state.name}
                </Text>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.change}>
                        <Text style={styles.buttonText}>{this.state.title}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    images: {
        width: 220,
        height: 220,
        resizeMode: 'cover',
        alignSelf: 'center',
        marginTop: 80,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10

    },
    name: {
        color: '#1E90FF',
        fontSize: 30,
        alignSelf: 'center',
    },
    button: {
        width: 75,
        height: 42,
        borderRadius: 20,
        backgroundColor: 'pink',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
});