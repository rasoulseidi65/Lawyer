
import React from 'react';
import {
    StyleSheet,
    Text,
    View,

    ScrollView, FlatList, Image, TouchableOpacity, TextInput,StatusBar
} from 'react-native';

import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-navigation';
import Header from '../SharedModule/Header/Header';

export default class Declaration extends React.Component {

    constructor() {
        super();

        this.state = {
           data: [
                {
                    id: 1,
                    title: 'اظهارنامه تخلیه به علت واگذاری مورد اجاره از طرف مستاجر به غیر'
                }
                ,
                {
                    id: 2,
                    title: 'اظهارنامه تخلیه یک باب به جهت تغییر شغل'

                }
                , {
                    id: 4,
                    title: 'اظهارنامه به مستاجر جهت تخلیه یک باب مغازه به علت نیاز شخصی'
                }

                , {
                    id: 5,
                    title: 'اظهارنامه تخلیه یک باب منزل مسکونی به علت انقضاء مدت پرداخت اجاره معوقه و تسویه آب و برق و گاز و تلفن'
                }
                , {
                    id: 6,
                    title: 'اظهارنامه تنظیم سند رسمی انتقال بهای کسری های پارکینگ'
                }
                , {
                    id: 7,
                    title: 'اظهارنامه تنظیم سند رسمی انتقال و تسلیم'


                }
                ,{
                    id: 8,


                    title: 'اظهارنامه قلع و قمع بنا اجرت المثل دوران تصرف یک باب خانه به پلاک ثبتی'

                }
                ,
                {
                    id: 9,
                    title: 'اظهارنامه خلع و ید و اجرات المثل دوران تصرف'



                }
                , {
                    id: 10,
                    title: 'اظهارنامه فسخ قولنامه از سوی فروشنده به لحاظ تاخیر خریدار در مراجعه به دفترخانه'

                }

                , {
                    id: 11,
                    title: 'اظهارنامه مطالبه ظرر و زیان ناشی از تخریب'



                }
                , {
                    id: 12,
                    title: 'اظهارنامه وجه چک بلا محل و خسارت وارده'


                }
                , {
                    id: 13,
                    title: 'اظهارنامه انحلال شرکت'


                }
                ,{
                    id: 14,


                    title: 'اظهارنامه مطالبه وجه چک بلامحل و خسارت تاخیر تادیه'

                }
                ,
                {
                    id: 15,
                    title: 'اظهارنامه منع ادامه عملیات ساختمان'



                }
                , {
                    id: 16,
                    title: 'اظهارنامه خریدار به فروشنده مبنی بر منع نقل و انتقال دو دانگ از پلاک ثبتی بخش شهرستان'



                }

                , {
                    id: 17,
                    title: 'اظهارنامه خریدار ملک به تنظیم سندرسمی انتقال حقوق اعیانی'



                }
                , {
                    id: 18,
                    title: 'اظهارنامه خریدار ملک به تنظیم سند رسمی انتقال و مطالبه وجه التزام'


                }
                , {
                    id: 19,
                    title: 'اظهارنامه خریدار ملک به فروشنده جهت مراجعه به دفترخانه به تنظیم سندرسمی انتقال'


                }
                , {
                    id: 20,
                    title: 'اظهارنامه موجر به مستاجرمبنی بر پرداخت اجاره بها و اجرت المثل مورد اجاره'


                }
                , {
                    id: 21,
                    title: 'اظهارنامه از سوی وکیل مبنی بر دعوت فروشنده به حضور در دفترخانه و تنظیم سند رسمی انتقال'


                }
                , {
                    id: 22,
                    title: 'اظهارنامه در خصوص مراجعه به دفترخانه و تنظیم سند انتقال ملک'


                }
                , {
                    id: 23,
                    title: 'اظهارنامه مبنی بر دعوت فروشنده به حضور در دفترخانه و انتقال رسمی مورد معامله همراه با چگونگی ابلاغ آن'


                }
                , {
                    id: 24,
                    title: 'اظهارنامه مبنی بر دعوت فروشنده به حضور در دفترخانه و انتقال رسمی مورد معامله همراه با چگونگی ابلاغ چگونگی ابلاغ آن'


                }
                , {
                    id: 25,
                    title: 'اظهارنامه به اداره ثبت جهت اطلاع از عدم حضور فروشنده در دفترخانه'


                }
                , {
                    id: 26,
                    title: 'اظهارنامه راجع به تعهد بیع همراه با چگونگی ثبت و ابلاغ آن'


                }
                , {
                    id: 27,
                    title: 'اظهار نامه خریدار به فروشنده مبنی بر اعلام مراتب فسخ معامله به لحاظ غبن فاحش'


                }
                , {
                    id: 28,
                    title: 'اظهارنامه از سوی زوج برای زوجه جهت تمکین'


                }



            ],
        };
    }




    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                   backgroundColor={'#333'}
                   barStyle="light-content" />
          <Header title="فرم های حقوقی" onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>



                <View style={styles.formContent}>
                    <View style={styles.inputContainer}>
                        <Icon
                            name='search'
                            color='#067062'
                            size={20} style={{ marginLeft: 5 }} />
                        <TextInput style={styles.inputs}
                            ref={'txtSearch'}
                            placeholder="جستجو"
                            underlineColorAndroid='transparent'
                            onChangeText={(name_address) => this.setState({ name_address })} />
                    </View>

                 </View>

                <View style={{ flex: 1, marginTop: 2 }}>
                    <FlatList style={{marginTop:25}} enableEmptySections={true}
                        numColumns={1}
                        data={this.state.data}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (

                                <Card style={styles.cc} key={0}>
                                    <View style={{ flex: 1, flexDirection: 'row-reverse', }}>

                                        <View style={styles.v1}>
                                            <Text style={styles.t1}>{item.title}</Text>


                                        </View>

                                        <View style={styles.v2}>

                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('det')}>
                                                <Icon
                                                    name="download"
                                                    color='#fff'
                                                    style={{ fontSize: 20,marginBottom:2 }}
                                                />
                                            </TouchableOpacity>

                                        </View>
                                    </View>

                                </Card>

                            )
                        }} />
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({


    headerContent: {
        padding: 10,
        alignItems: 'center',
    },
    vv:{
        flexDirection: 'row',
         justifyContent: 'space-between',
          backgroundColor: '#067062',
           height: 45

    },
    tt : {
        fontSize: 15,
         color: 'white',
          fontFamily: "IRANSansMobile_Bold"
    },
    cc:{
        marginTop: 10,
         backgroundColor: '#fff',
          height: 98,
           marginHorizontal: 15,
            borderColor: '#067062',
             borderRightWidth: 10,
              marginBottom: 8,
               shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    cardStyle: {

        marginTop: 10,
         paddingRight: 10,
          paddingLeft: 10,
           backgroundColor: '#fff',
            marginHorizontal: 10,
             height: 200,
        borderLeftWidth: 6,
        borderColor: '#077ce2',

        shadowOffset: {
            width: 0,
            height: 2,
            marginVertical: 5,
            marginRight: 16,
            marginBottom: 12

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 12,
    },
    v1:{
        flex: 12,
         marginTop: 1,
          alignItems: 'center',
           justifyContent: 'flex-end',
            alignSelf: 'center',
             flexDirection: 'row'
    },
    t1:{
        fontSize: 14,
         color: '#555',
         marginHorizontal:8,
          fontFamily: "Vazir-Black",

            alignSelf:'flex-end'
    },
    v2:{
        width: 35,
         backgroundColor: '#067062',
          marginLeft: 10,
           height: 35,
           alignSelf:'center',
            justifyContent: 'center',
             alignItems: 'center',
              borderRadius: 25
    },
    cardImage: {

        height: 195,
        width: null,
    },
    formContent: {
        flexDirection: 'row',
        marginTop: 15,
        borderColor: '#067062',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        height: 40,
        marginBottom: 10,
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        // borderRadius:30,
        // borderBottomWidth: 1,
        // height:45,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        margin: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconBtnSearch: {
        alignSelf: 'center'
    },
    inputs: {
        height: 35,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        marginLeft: 15,
        justifyContent: 'center'
    },

});
