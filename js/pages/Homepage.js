import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    View,
    Text,
    DrawerLayoutAndroid,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Alert
} from 'react-native';
import Random from './Random';
import Share from './Share';
import TabNavigator from 'react-native-tab-navigator';
import StackNavigator from 'react-navigation'
import Setting from './Setting'

var myDate = new Date();
type Props = {};
const {width, height} = Dimensions.get('window');

export default class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {header: null};//头部导航隐藏
    render() {
        const {navigation} = this.props;
        var navigationView = (
            //侧滑栏内容
            <View style={{flex: 1, backgroundColor: 'pink'}}>

                <ScrollView style={{marginTop: 180}} ref={(scrollView) => {
                    _scrollView = scrollView;
                }}>
                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                                <Text style={styles.text}>编辑</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => navigation.navigate('Set')}>
                                <Text style={styles.text}>设置</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => {
                                Alert.alert('感谢支持！')
                            }}>
                                <Text style={styles.text}>意见反馈</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </View>
        );
        return (
            //主页
            <DrawerLayoutAndroid
                ref={(drawer) => {
                    this.drawer = drawer;
                }}
                drawerWidth={180}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => navigationView}>

                <View style={styles.container}>
                    <Text style={styles.date}>{myDate.getMonth() + 1}月{myDate.getDate()}日</Text>
                    <Text style={styles.title}>今日份美食：</Text>
                    <Random/>

                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <TouchableOpacity onPress={this.open}>
                            <Image style={[styles.list, {tintColor: 'blue'}]}
                                   source={require('../../res/images/hamburg(1).png')}/>
                        </TouchableOpacity>
                        <Share/>
                    </View>
                </View>
            </DrawerLayoutAndroid>
        );
    }

    //侧滑栏打开关闭
    open = () => {
        this.drawer.openDrawer();
    };
    close = () => {
        this.drawer.closeDrawer();
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue',
    },
    date: {
        color: 'black',
        fontSize: 30,
        marginTop: 20,
        marginLeft: 20,
    },
    title: {
        color: 'black',
        fontSize: 40,
        marginTop: 20,
        marginLeft: 20
    },
    list: {
        width: 35,
        height: 35,
        marginLeft: 15
    },
    text: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        paddingLeft: 8,
    },
    listimage: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    name: {
        color: 'blue',
        fontSize: 25,
        textAlign: 'center'
    },
    share: {
        width: 35,
        height: 35,
        marginLeft: 260

    },
    rectangle_view: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#dedfe0',
        borderBottomWidth: 1,
    },
});