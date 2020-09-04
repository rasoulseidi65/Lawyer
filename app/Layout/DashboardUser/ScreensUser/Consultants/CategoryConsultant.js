
import React from 'react';
import {
    StyleSheet,
    Text,
    View,

    ScrollView, FlatList, Image, TouchableOpacity,StatusBar
} from 'react-native';
import Header from '../../../../SharedModule/Header/Header';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-navigation';


export default class Category_Consultant extends React.Component {

    constructor() {
        super();

        this.state = {


            Daydata: [
                {
                    id: 1,


                    title: 'مشاور خانواده'

                }
                ,
                {
                    id: 2,
                    title: 'مشاور اداری'

                }
                , {
                    id: 4,
                    title: 'مشاور بیمه'

                }

                , {
                    id: 5,
                    title: 'مشاور امور بانکی'

                }
                , {
                    id: 6,
                    title: 'مشاور حقوق کار '
                }
                , {
                    id: 7,
                    title: 'مشاور حقوق تجارت '
                }
                , {
                    id: 8,
                    title: 'مشاور مالکیت فکری '
                }
                , {
                    id: 9,
                    title: ' مشاور اجرای اسناد رسمی'
                }
                , {
                    id: 10,
                    title: 'مشاور کیفری '
                }
                , {
                    id: 11,
                    title: 'مشاور ورشکستگی '
                }
                , {
                    id: 12,
                    title: 'مشاور شهروندی '
                }
                , {
                    id: 13,
                    title: 'مشاور حقوق بشر'
                }
                , {
                    id: 14,
                    title: 'مشاور حقوق ثبت '
                }


            ],
        };
    }


    clickEventListener(item) {
        if (item.id == 1) {
            this.props.navigation.navigate('declaration')

        } else if (item.id == 2) {
            this.props.navigation.navigate('petition')
        }
        else if (item.id == 3) {
            this.props.navigation.navigate('laws')
        }
        else if (item.id == 4) {
            this.props.navigation.navigate('salary')
        }
        else if (item.id == 5) {
            this.props.navigation.navigate('formlawe')
        }
        else if (item.id == 6) {
            this.props.navigation.navigate('salaryLaw')
        }

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

                <Image style={styles.cardImage} source={require('../../../../../assets/image/11.jpg')} />


                <View style={{ flex: 1, marginTop: 2 }}>
                    <FlatList style={{ marginTop: 25 }} enableEmptySections={true}
                        numColumns={1}
                        data={this.state.Daydata}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (

                                <Card style={styles.cc} key={0}>
                                    <View style={{ flex: 1, flexDirection: 'row-reverse', }}>
                                        <View style={{ marginRight: 8 }}>
                                            <Image
                                                style={{ width: 35, height: 35, marginTop: 12 }}
                                                source={require('../../../../../assets/image/consulting.png')}></Image>
                                        </View>
                                        <View style={styles.v1}>
                                            <Text style={styles.t1}>{item.title}</Text>


                                        </View>

                                        <View style={styles.v2}>

                                            <TouchableOpacity   onPress={() => this.props.navigation.navigate('consultant')}>
                                                <Icon
                                                    name="angle-left"
                                                    color='#fff'
                                                    style={{ fontSize: 30, marginRight: 5, marginBottom: 2 }}
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
    vv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#067062',
        height: 45

    },
    tt: {
        fontSize: 15,
        color: 'white',
        fontFamily: "IRANSansMobile_Bold"
    },
    cc: {
        marginTop: 10,
        backgroundColor: '#fff',
        height: 60,
        marginHorizontal:20,
        borderColor: '#067062',
        borderRightWidth: 10,
        marginBottom: 20,
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
    v1: {
        flex: 12,
        marginTop: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    t1: {
        fontSize: 16,
        color: '#555',
        fontFamily: "IRANSansMobile_Bold",
        fontWeight: 'bold',
        marginLeft: 10
    },
    v2: {
        width: 35,
        backgroundColor: '#067062',
        marginLeft: 10,
        height: 35,
        alignSelf: 'center',
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
        marginTop: 30,
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
