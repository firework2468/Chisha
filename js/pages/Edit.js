import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Alert,
    SwipeableFlatList,
    TouchableHighlight
} from 'react-native';
import Random from './Random';

const {width, height} = Dimensions.get('window');
var imageList = [
    {image: require('../../res/images/food/danbaofan.png'), name: '蛋包饭'},
    {image: require('../../res/images/food/mian1.png'), name: '拉面'},
    {image: require('../../res/images/food/mian2.png'), name: '拉面'},
    {image: require('../../res/images/food/niupai.png'), name: '牛排'},
    {image: require('../../res/images/food/sweet1.png'), name: '纸杯蛋糕'},
    {image: require('../../res/images/food/sweet2.png'), name: '三角蛋糕'},
    {image: require('../../res/images/food/zhangyu.png'), name: '章鱼小丸子'},
    {image: require('../../res/images/food/ea4735fae6cd7b898f649c8d0c2442a7d9330e77.jpg'), name: '意面'},
    {image: require('../../res/images/food/fdbdfc039245d6887eac63cca7c27d1ed31b24e8.jpg'), name: '甜甜圈'},
    {image: require('../../res/images/food/xiaomian.png'), name: '小面'}
];
export default class Edit extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: '编辑',
            gesturesEnabled: true,
            headerRight:
                <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                    <Image style={{marginRight: 20, width: 30, height: 30, tintColor: 'white'}}
                           source={require('../../res/images/icon-adds.png')}/>
                </TouchableOpacity>
        }

    };
    dataContainer = [];

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selected: (new Map(): Map<String, boolean>),
            refreshing: false
        }
    }

    //初始化数据
    componentDidMount() {
        {
            this.dataContainer.push(
                {image: require('../../res/images/food/danbaofan.png'), name: '蛋包饭'},
                {image: require('../../res/images/food/mian1.png'), name: '拉面'},
                {image: require('../../res/images/food/mian2.png'), name: '拉面'},
                {image: require('../../res/images/food/niupai.png'), name: '牛排'},
                {image: require('../../res/images/food/sweet1.png'), name: '纸杯蛋糕'},
                {image: require('../../res/images/food/sweet2.png'), name: '三角蛋糕'},
                {image: require('../../res/images/food/zhangyu.png'), name: '章鱼小丸子'},
                {image: require('../../res/images/food/ea4735fae6cd7b898f649c8d0c2442a7d9330e77.jpg'), name: '甜甜圈'},
                {image: require('../../res/images/food/fdbdfc039245d6887eac63cca7c27d1ed31b24e8.jpg'), name: '意面'},
                {image: require('../../res/images/food/xiaomian.png'), name: '小面'})
        }
        this.setState({data: this.dataContainer});
    }

    _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity activeOpacity={1}>
                <View style={styles.cellViewStyle}>
                    <Image style={{marginLeft: 10, width: 100, height: 100}} source={item.image}/>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.topTextStyle}>{item.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    //分割线
    _renderItemSeparatorComponent = ({highlighted}) => (
        <View style={{height: 1, backgroundColor: '#000'}}/>
    );
    //尾部
    footer = () => {
        return (
            <Text style={{fontSize: 20, alignSelf: 'center'}}>到底啦，没有啦！</Text>
        )
    };


    //下拉刷新
    _renderRefresh = () => {
        {
            var newData = [];
            newData.push(
                {
                    image: require('../../res/images/food/31f30f2442a7d9330d06351bae4bd11372f001e8.jpg'),
                    name: '新添加的数据1'
                },
                {
                    image: require('../../res/images/food/debe9925bc315c60fa32d3e78eb1cb13485477d7.jpg'),
                    name: '新添加的数据2'
                });
        }
        this.dataContainer = this.dataContainer.concat(newData);
        // 将新数据集合赋予数据状态并更新页面
        this.setState({data: this.dataContainer});
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({refreshing: false});
        }, 3000);
    };
    //侧滑菜单
    getQuickActions = (rowData) => {
        return <View style={styles.quickAContent}>
            <TouchableHighlight onPress={() => this._delItem(rowData)}>
                <View style={styles.quick}>
                    <Text style={styles.delete}>删除</Text>
                </View>
            </TouchableHighlight>
        </View>
    };
    //删除数据后刷新
    _delItem = (rowData) => {
        let {data} = this.state;
        data.splice(data.findIndex(item => item.id === rowData.item.id), 1);
        this.setState({data: data})
    };

    render() {
        const {navigation} = this.props;
        return (
            <View>
                <SwipeableFlatList
                    data={this.state.data}
                    extraData={this.state.selected}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem}
                    ListFooterComponent={this.footer}//footer尾部组件
                    ItemSeparatorComponent={this._renderItemSeparatorComponent}//分割线组件
                    refreshing={this.state.refreshing}
                    onRefresh={this._renderRefresh}
                    getItemLayout={(data, index) => ({length: 44, offset: (44 + 1) * index, index})}
                    renderQuickActions={(rowData) => this.getQuickActions(rowData)}//创建侧滑菜单
                    maxSwipeDistance={80}//可展开（滑动）的距离
                    bounceFirstRowOnMount={false}//进去的时候不展示侧滑效果
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cellViewStyle: {
        marginTop: 25,
        borderBottomWidth: 0.5,
        borderBottomColor: '#e8e8e8',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    topTextStyle: {
        color: 'black',
        fontSize: 20,
        marginLeft: 90,
        marginBottom: 8,
    },
    //侧滑菜单的样式
    quickAContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 10,
        marginTop: 25,

    },
    quick: {
        backgroundColor: "#ff1d49",
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: 80,
    },
    delete: {
        color: "#d8fffa",
        fontSize: 20,
        textAlign: 'center',
        marginRight: 20
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
});