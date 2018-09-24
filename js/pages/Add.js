import React, {Component} from 'react';
import ImagePicker from 'react-native-image-picker';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
    Modal,
    TextInput,
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class Add extends Component {
    static navigationOptions = {
        title: '添加',
        headerRight:
            <TouchableOpacity>
                <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold', marginRight: 18}}>保存</Text>
            </TouchableOpacity>
    };
    state = {
        avatarSource: null, text: ''
    };

    //选择图片
    selectPhotoTapped() {
        const options = {
            title: null,
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '从相册选择照片',
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8,
            angle: 0,
            allowsEditing: false,
            noData: false,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                let source = {uri: response.uri};

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 30}]}>
                        {this.state.avatarSource === null ? <Text>选择照片</Text> :
                            <Image style={styles.avatar} source={this.state.avatarSource}/>
                        }
                    </View>
                </TouchableOpacity>
                <TextInput style={styles.input}
                           placeholder="请输入名字"
                           onChangeText={(text) => this.setState({text})}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 50,
        width: 100,
        height: 100
    },
    input: {
        height: 45,
        width: 80,
        borderWidth: 1,
        paddingLeft: 5,
        borderColor: '#ccc',
        borderRadius: 4
    },
});
