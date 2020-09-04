import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, FlatList, TouchableOpacity, Alert, ScrollView, ImageBackground, StatusBar, TextInput, Dimensions,
} from 'react-native';

import {FlatGrid} from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome';
//................icons....................................
import {stylesHome} from './style';
export default class home extends Component {
    constructor(props) {
        super(props);
        console.log( this.props)
        this.state = {
            data: [
                {id: 1, icon: 'calculator', title: 'محاسبات قضایی'},
                {id: 2, icon: 'balance-scale', title: 'رویه قضایی'},
                {id: 3, icon: 'book', title: 'قوانین حقوقی'},
                {id: 4, icon: 'hand-peace-o', title: 'آرا قضایی'},
                {id: 5, icon: 'file-pdf-o', title: 'فرم های حقوقی'},
                {id: 6, icon: 'users', title: 'نظریات مشورتی '},
                {id: 7, icon: 'briefcase', title: 'خدمات قضایی'},
                {id: 8, icon: 'handshake-o', title: 'مشاوره'},
                {id: 9, icon: 'globe', title: 'پایگاه خبری'},
                {id: 10, icon: 'map-marker', title: 'معرفی مراکز قضایی'},
                {id: 11, icon: 'list-alt', title: 'لیست مشاوران'},
                {id: 12, icon: 'edit', title: 'یاداشت ها'},


            ],

        };
    }
    toggleDrawer = () => {
        this.props.navigation.toggleDrawer();
    };
    clickEventListener(item) {
        if (item.id === 1) {
            this.props.navigation.navigate('calculation');

        } else if (item.id === 2) {
            Alert.alert('funh hqhti lda,n');
        } else if (item.id === 3) {
            this.props.navigation.navigate('laws');
        } else if (item.id === 4) {
            this.props.navigation.navigate('salary');
        } else if (item.id === 5) {
            this.props.navigation.navigate('formlawe');
        } else if (item.id === 6) {
            this.props.navigation.navigate('salaryLaw');
        } else if (item.id === 7) {
            this.props.navigation.navigate('diyat');
        } else if (item.id === 8) {
            this.props.navigation.navigate('Category');
        } else if (item.id === 9) {
            this.props.navigation.navigate('news');
        } else if (item.id === 10) {
            this.props.navigation.navigate('location');
        } else if (item.id === 11) {
            this.props.navigation.navigate('consultant');
        }else if (item.id === 12) {
            this.props.navigation.navigate('note');
        }

    }
    render() {
        const {open} = this.state;
        const {showAlert} = this.state;
        return (
            <View style={stylesHome.container}>
                <StatusBar hidden={true}
                           backgroundColor={'#333'}
                           barStyle="light-content"/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                    <View style={{flexDirection: 'row', marginLeft: 10}}>
                    </View>
                    <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                        <View style={{marginRight: 15}}>
                            <Icon
                                name='bars'
                                color='#fff'
                                size={20}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={stylesHome.headerContent}>
                    <Image style={stylesHome.avatar}
                           source={require('../../../assets/image/ss1.png')}/>
                    <Text style={stylesHome.vakil}>وکیل شما</Text>

                </View>
                <Text
                    style={{
                        color: '#fff',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 20,
                        fontSize: 16,
                        fontFamily: 'Vazir-Black',
                    }}>
                    دفتر وکالت مجازی، مشاوره آنلاین</Text>
                <ScrollView style={stylesHome.card1}>
                    <View style={stylesHome.card2}>
                        <View style={{marginTop: 2}}>
                            <FlatGrid
                                itemDimension={100}
                                data={this.state.data}
                                style={stylesHome.gridView}
                                //staticDimension={300}
                                // fixed
                                // spacing={20}
                                renderItem={({item, index}) => (

                                    <View style={{}}>
                                        <TouchableOpacity style={[stylesHome.card]} onPress={() => {
                                            this.clickEventListener(item);
                                        }}>
                                            <Icon active style={{fontSize: 30, color: '#fff'}} name={item.icon}/>
                                        </TouchableOpacity>

                                        <View style={stylesHome.cardHeader}>
                                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                                <Text style={[stylesHome.title]}>{item.title}</Text>
                                            </View>
                                        </View>

                                    </View>


                                )}/>

                        </View>


                    </View>
                </ScrollView>

            </View>
        );
    }
}



