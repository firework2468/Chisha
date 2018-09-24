import React, {Component} from 'react';
import {View, TouchableOpacity, Alert, StyleSheet, Dimensions, Modal, Text, Image} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {ModalVisible: false};
    }

    //分享菜单开启与关闭
    showModal = () => {
        this.setState({
            ModalVisible: true
        })
    };
    closeModal = () => {
        this.setState({
            ModalVisible: false
        });
    };

    render() {
        return (
            <View>
                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.ModalVisible}
                    onRequestClose={this.closeModal}>
                    <TouchableOpacity style={styles.container}
                                      activeOpacity={1}
                                      onPress={() => this.closeModal()}>
                        <View style={styles.modalStyle}>

                            <Text style={styles.text}>选择分享方式</Text>
                            <View style={{flex: 1, flexDirection: 'row', marginTop: -60}}>
                                <TouchableOpacity style={styles.item} onPress={() => Alert.alert('分享到QQ')}>
                                    <Image resizeMode='contain' style={styles.image}
                                           source={require('../../res/images/icon/icon-qq.png')}/>
                                    <Text>QQ</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.item} onPress={() => Alert.alert('分享到QQ空间')}>
                                    <Image resizeMode='contain' style={styles.image}
                                           source={require('../../res/images/icon/icon-qzone.png')}/>
                                    <Text>QQ空间</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.item} onPress={() => Alert.alert('分享到朋友圈')}>
                                    <Image resizeMode='contain' style={styles.image}
                                           source={require('../../res/images/icon/icon-friends.png')}/>
                                    <Text>朋友圈</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.item} onPress={() => Alert.alert('分享到微信')}>
                                    <Image resizeMode='contain' style={styles.image}
                                           source={require('../../res/images/icon/icon-weixin.png')}/>
                                    <Text>微信好友</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.item} onPress={() => Alert.alert('分享到微博')}>
                                    <Image resizeMode='contain' style={styles.image}
                                           source={require('../../res/images/icon/icon-weibo.png')}/>
                                    <Text>微博</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.button} onPress={this.closeModal}>
                                <Text style={styles.buttonText}>取消</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                </Modal>
                <TouchableOpacity onPress={this.showModal}>
                    <Image style={[styles.share, {tintColor: 'yellow'}]} source={require('../../res/images/send.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalStyle: {
        top: height - 245,
        left: 0,
        width: width,
        height: 220,
        backgroundColor: '#ffffff'
    },
    text: {
        flex: 1,
        fontSize: 20,
        marginTop: 15,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    item: {
        width: width / 5,
        height: 150,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    image: {
        width: 60,
        height: 60,
        marginBottom: 8
    },
    share: {
        width: 35,
        height: 35,
        marginLeft: 260,
        alignItems: 'flex-end'
    },
    button: {
        width: width,
        height: 50,
        marginTop: 10,
        backgroundColor: 'gray',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
    },
});