import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, FlatList, TouchableOpacity, Alert, ScrollView, ImageBackground, StatusBar, TextInput, Dimensions,
} from 'react-native';

import {FlatGrid} from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome5';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//................icons....................................

export default class Calculation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, icon: 'money-bill-alt', title: 'ارث'},
                {id: 2, icon: 'car-crash', title: 'جریمه دیرکرد'},
                {id: 3, icon: 'coins', title: 'مهریه'},
                {id: 4, icon: 'hand-holding-usd', title: 'اجرت وکیل'},
                {id: 5, icon: 'image', title: 'تمبر مالیاتی وکلا'},
                {id: 6, icon: 'money-check-alt', title: 'دستمزد کارشناس'},
                {id: 7, icon: 'money-bill', title: 'دیه'},
                {id: 8, icon: 'home', title: 'معرفی مراکز قضایی'},
                {id: 9, icon: 'money-bill-wave', title: 'هزینه دادرسی'},


            ],

        };
    }


    clickEventListener(item) {
        if (item.id == 1) {
            this.props.navigation.navigate('inheritance');

        } else if (item.id == 2) {
            this.props.navigation.navigate('penalty');
        } else if (item.id == 3) {
            this.props.navigation.navigate('dowry');
        } else if (item.id == 4) {
            this.props.navigation.navigate('salary');
        } else if (item.id == 5) {
            this.props.navigation.navigate('stamp');
        } else if (item.id == 6) {
            this.props.navigation.navigate('salaryLaw');
        } else if (item.id == 7) {
            this.props.navigation.navigate('diyat');
        } else if (item.id == 8) {
            this.props.navigation.navigate('salarylaw');
        } else if (item.id == 9) {
            this.props.navigation.navigate('cost');
        }


    }

    render() {
        const {open} = this.state;
        const {showAlert} = this.state;
        return (
            <View style={styles.container}>

                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#0078db'}
                           barStyle="light-content"/>


                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}
                                  onPress={() => this.props.navigation.goBack(null)}
                >

                    <View style={{flexDirection: 'row', marginLeft: 10}}>


                    </View>

                    <View style={{marginRight: 15}}>
                        <Icon

                            name='arrow-right'
                            color='#fff'
                            size={20}/>
                    </View>

                </TouchableOpacity>
                <View style={{
                    backgroundColor: '#fff',
                    height: 112,
                    width: 112,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 5,
                    borderTopLeftRadius: 100,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopRightRadius: 100,
                    shadowOpacity: 0.9,
                    shadowRadius: 7.49,
                    elevation: 12,
                    borderRadius: 10,
                }}>


                    <Icon
                        name='calculator'
                        color='#067062'
                        size={50} style={{marginLeft: 5}}/>

                </View>

                <Text
                    style={{
                        color: '#fff',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 15,
                        fontSize: 18,
                        fontFamily: 'Vazir-Black',
                    }}
                >
                    محاسبات قضایی</Text>


                <ScrollView style={styles.card1}>
                    <View style={styles.card2}>

                        <View style={{marginTop: 10}}>

                            <FlatGrid
                                itemDimension={100}
                                data={this.state.data}
                                style={styles.gridView}
                                //staticDimension={300}
                                // fixed
                                // spacing={20}
                                renderItem={({item, index}) => (

                                    <View>
                                        <TouchableOpacity style={[styles.card]}
                                                          onPress={() => this.clickEventListener(item)}>
                                            <Icon active style={{fontSize: 25, color: '#fff'}} name={item.icon}/>
                                        </TouchableOpacity>

                                        <View style={styles.cardHeader}>
                                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                                <Text style={[styles.title]}>{item.title}</Text>
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#067062',

    },


    /******** card **************/
    card: {
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 13,
        marginHorizontal: 40,
        backgroundColor: '#067062',
        flexBasis: '42%',
        width: 90,
        height: 90,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    cardHeader: {

        marginTop: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 14,
        flex: 2,
        marginHorizontal: -15,
        fontFamily: 'Vazir-Black', marginVertical: 1,
        color: '#067062',

    },
    vakil: {
        color: '#067062',
        marginTop: -40, fontSize: 20,
        fontFamily: 'Lalezar-Regular',

    },
    // ...........کارد اصلی...........
    // ...........کارد اصلی...........
    card1: {
        width: '100%',
        marginTop: 20,
        alignSelf: 'center',
        height: windowHeight,

        shadowColor: '#3d933c',
        backgroundColor: '#fff',

        shadowOffset: {
            width: 0,
            height: 2,
            marginRight: 16,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 12,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    card2: {
        width: '100%',
        marginTop: 20,
        alignSelf: 'center',


        shadowColor: '#3d933c',
        backgroundColor: '#fff',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
    },
    headerContent: {

        alignItems: 'center',
        backgroundColor: '#fff',
        height: 112,
        width: 112,
        justifyContent: 'center',
        alignSelf: 'center',

        shadowOpacity: 0.9,
        shadowRadius: 7.49,
        elevation: 12,

        borderRadius: 100,
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 63,

    },
});

