import React, {Component} from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList,
    SwipeableFlatList,
    ScrollView
} from 'react-native';


export default class Setting extends Component {
    static navigationOptions = {title: '设置'};

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <ScrollView ref={(scrollView) => {
                    _scrollView = scrollView;
                }}>
                    <View style={{height: 30, backgroundColor: '#f9f9fb'}}/>

                    <TouchableOpacity onPress={() => navigation.navigate('Change')}>
                        <View style={styles.rectangle_view}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={require('../../res/images/衣服换肤.png')}
                                       style={{alignSelf: 'center', width: 30, height: 30}}/>
                                <Text style={styles.rectangle_text}>换肤</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.rectangle_view}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={require('../../res/images/清理.png')}
                                       style={{alignSelf: 'center', width: 30, height: 30}}/>
                                <Text style={styles.rectangle_text}>清理缓存</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title_view: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27b5ee',
    },
    title_text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    three_image_view: {
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    vertical_view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 15,
    },
    top_text: {
        marginTop: 5,
        color: 'black',
        fontSize: 16,
        textAlign: 'center'
    },
    rectangle_view: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#dedfe0',
        borderBottomWidth: 1,
    },
    rectangle_text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        paddingLeft: 8,
    },
    button: {
        margin: 7,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 3,
    },

});