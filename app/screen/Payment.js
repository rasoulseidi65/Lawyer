// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     Image, FlatList, TouchableOpacity, Alert, ScrollView, ImageBackground, StatusBar, TextInput,Dimensions
// } from 'react-native';

// import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
// import { FlatGrid } from 'react-native-super-grid';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
//  import { Button } from 'react-native-elements';
// //................icons....................................

// export default class Payment extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {

//         };
//     }


//     render() {
//         const { open } = this.state;
//         const { showAlert } = this.state;
//         return (
//             <View style={styles.container}>

//                 <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
//                     backgroundColor={'#0078db'}
//                     barStyle="light-content" />


//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
//                     <View style={{ flexDirection: 'row', marginLeft: 10 }}>


//                     </View>

//                     <View style={{ marginRight: 15 }}>
//                         <Icon

//                         name='arrow-right'
//                             color='#fff'
//                             size={20} />
//                     </View>
//                 </View>

//                 <View style={{
//                     backgroundColor: '#fff', height: 112, width:112, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 5, borderTopLeftRadius: 100, borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopRightRadius: 100, shadowOpacity: 0.9,
//                     shadowRadius: 7.49,
//                     elevation: 12,
//                     backgroundColor: 'white', borderRadius: 10
//                 }}>


// <Image
//                             style={{ width: 65, height: 60, shadowRadius: 7.49, justifyContent: 'center', alignSelf: 'center', borderRadius: 20, }}
//                             source={require('../assets/image/cv.png')}
//                         />

//                 </View>

//                 <Text
//                     style={{
//                         color: '#fff', justifyContent: 'center', alignSelf: 'center', marginTop: 15, fontSize: 18,fontFamily:"Vazir-Black"
//                     }}
//                 >
//                   پرداخت</Text>


//                    <ScrollView>

//                 <Card

//                             style={{
//                                 width: '100%', marginTop: 30, alignSelf: 'center', height: windowHeight-230,

//                                 shadowColor: '#3d933c',


//                                 shadowOffset: {
//                                     width: 0,
//                                     height: 2,
//                                     marginRight: 16,

//                                 },
//                                 shadowOpacity: 0.25,
//                                 shadowRadius: 3.84,
//                                 elevation: 12,
//                                borderTopEndRadius:40,
//                                borderTopStartRadius:40

//                             }}>

// <View style={{ marginTop: 10 }}>

//                        <Image
//     style={{ width: 320, height: 200, shadowRadius: 7.49, justifyContent: 'center', alignSelf: 'center', marginTop: 20, borderRadius: 20, }}
//     source={require('../assets/image/pay.png')}
// />


// <Text style={{ color: '#067062', fontFamily: "Vazir-Black", justifyContent: 'center', alignSelf: 'center', marginTop: 30, fontSize: 18 }}>قیمت برای هرساعت مشاوره </Text>

// <View style={{
//     backgroundColor: '#fff', height: 50, width: '75%', alignSelf: 'center', borderRadius: 10, shadowOpacity: 0.9,
//     shadowRadius: 7.49,
//     marginTop: 45,
//     elevation: 12,
//     backgroundColor: 'white'
// }}>
//     <TextInput
//         style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', fontFamily: "IRANSansMobile(FaNum)" }}
//         placeholder="1000000  ریال"
//         underlineColorAndroid="transparent"
//         editable={false}
//     />
// </View>
// <Button buttonStyle={{
//     marginHorizontal: 40, marginVertical: 20, backgroundColor: '#067062', borderRadius: 10,
//     marginTop: 45,
//     shadowColor: '#067062',
//     shadowOffset: {
//         width: 0,
//         height: 6,
//     },
//     shadowOpacity: 0.37,
//     shadowRadius: 7.49,
//     elevation: 12,

// }}
//     onPress={() => this.props.navigation.navigate('sel')}
//     titleStyle={{ color: '#fff', fontFamily: "IRANSansMobile_Bold" }}

//     title="پرداخت"
// />

// </View>


//                     </Card>
//                     </ScrollView>

//             </View>
//         );
//     }
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#067062',

//     },


//     /******** card **************/
//     card: {
//         shadowColor: '#474747',
//         shadowOffset: {
//             width: 0,
//             height: 6,
//         },
//         shadowOpacity: 0.37,
//         shadowRadius: 7.49,

//         elevation: 12,
//         marginVertical: 20,
//         marginHorizontal: 40,
//         backgroundColor: "#067062",
//         //flexBasis: '42%',
//         width: 90,
//         height: 90,
//         borderRadius: 60,
//         alignItems: 'center',
//         justifyContent: 'center',
//         alignSelf: 'center'
//     },
//     cardHeader: {

//      marginTop:1,
//         flexDirection: 'row',
//         alignItems: "center",
//         justifyContent: "center"
//     },


//     cardImage: {
//         height: 50,
//         width: 50,
//         alignSelf: 'center'
//     },
//     title: {
//         fontSize: 14,
//         flex: 2,
//         marginHorizontal: -15,
//         fontFamily:"Vazir-Black", marginVertical:1,
//         color:'#555'

//     },
//     /******** card **************/
//     card2: {
//         shadowColor: '#00000021',
//         shadowOffset: {
//             width: 2
//         },
//         shadowOpacity: 0.80,
//         shadowRadius: 7.49,

//         elevation: 19,
//         marginVertical: -15,
//         backgroundColor: "white",
//         height: 150,
//         width: 150,
//         marginHorizontal: 5,
//         borderRadius: 60,
//     },
//     cardHeader2: {
//         paddingVertical: 17,
//         paddingHorizontal: 16,
//         borderTopLeftRadius: 1,
//         borderTopRightRadius: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     cardContent2: {
//         paddingVertical: 12.5,
//         paddingHorizontal: 16,
//     },
//     cardFooter2: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingTop: 12.5,
//         paddingBottom: 25,
//         paddingHorizontal: 16,
//         borderBottomLeftRadius: 1,
//         borderBottomRightRadius: 1,
//     },
//     cardImage2: {
//         flex: 1,
//         height: 150,
//         width: 150,
//         borderRadius: 5
//     },
//     /******** card components **************/
//     title2: {
//         fontSize: 18,
//         flex: 1,
//     },
//     price2: {
//         fontSize: 16,
//         color: "green",
//         marginTop: 5
//     },
//     buyNow2: {
//         color: "purple",
//     },
//     icon2: {
//         width: 25,
//         height: 25,
//     },
//     /******** social bar ******************/
//     socialBarContainer2: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'row',
//         flex: 1
//     },
//     socialBarSection2: {
//         justifyContent: 'center',
//         flexDirection: 'row',
//         flex: 1,
//     },
//     socialBarlabel2: {
//         marginLeft: 8,
//         alignSelf: 'flex-end',
//         justifyContent: 'center',
//     },
//     socialBarButton2: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// });


import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, FlatList, TouchableOpacity, Alert, ScrollView, ImageBackground, StatusBar, TextInput, Dimensions,
} from 'react-native';

import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import {FlatGrid} from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome5';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {Button} from 'react-native-elements';
//................icons....................................

export default class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    toggleSwitch1() {
        this.setState({
            checkbox1: !this.state.checkbox1,
        });
    }

    toggleSwitch2() {
        this.setState({
            checkbox2: !this.state.checkbox2,
        });

    }

    render() {

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


                    <Image
                        style={{
                            width: 65,
                            height: 60,
                            shadowRadius: 7.49,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            borderRadius: 20,
                        }}
                        source={require('../../assets/image/cv.png')}
                    />

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
                    پرداخت</Text>


                <ScrollView>
                    <View style={styles.card1}>
                        <View style={{marginTop: 10}}>

                            <Image
                                style={{
                                    width: 320,
                                    height: 200,
                                    shadowRadius: 7.49,
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    marginTop: 20,
                                    borderRadius: 20,
                                }}
                                source={require('../../assets/image/pay.png')}
                            />


                            <Text style={{
                                color: '#067062',
                                fontFamily: 'Vazir-Black',
                                justifyContent: 'center',
                                alignSelf: 'center',
                                marginTop: 30,
                                fontSize: 18,
                            }}>قیمت برای هرساعت مشاوره </Text>

                            <View style={{
                                backgroundColor: '#fff',
                                height: 50,
                                width: '75%',
                                alignSelf: 'center',
                                borderRadius: 10,
                                shadowOpacity: 0.9,
                                shadowRadius: 7.49,
                                marginTop: 45,
                                elevation: 12,
                            }}>
                                <TextInput
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        alignSelf: 'center',
                                        fontFamily: 'IRANSansMobile(FaNum)',
                                    }}
                                    placeholder="1000000  ریال"
                                    underlineColorAndroid="transparent"
                                    editable={false}
                                />
                            </View>
                            <Button buttonStyle={{
                                marginHorizontal: 40, marginVertical: 20, backgroundColor: '#067062', borderRadius: 10,
                                marginTop: 45,
                                shadowColor: '#067062',
                                shadowOffset: {
                                    width: 0,
                                    height: 6,
                                },
                                shadowOpacity: 0.37,
                                shadowRadius: 7.49,
                                elevation: 12,

                            }}
                                    onPress={() => this.props.navigation.navigate('sel')}
                                    titleStyle={{color: '#fff', fontFamily: 'IRANSansMobile_Bold'}}

                                    title="پرداخت"
                            />

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

    vakil: {
        color: '#067062',
        marginTop: -40, fontSize: 20,
        fontFamily: 'Lalezar-Regular',

    },
    // ...........کارد اصلی...........
    card1: {
        width: '100%', marginTop: 20, alignSelf: 'center', height: windowHeight - 120,

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
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,

    },
    textstyle: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        marginBottom: 18,
    },
    text: {
        fontSize: 14,
        color: '#333',
        fontFamily: 'Vazir-Black',

    },

    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#e2e2e2',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: '92%',
        height: 50,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',

    },
    inputs: {
        height: 45,
        marginRight: 13,
        borderBottomColor: '#FFFFFF',
        flex: 1,
        fontFamily: 'IRANSansMobile(FaNum)_Bold',
        color: '#555',
        marginLeft: 10,
    },
    inputIcon: {

        marginLeft: 15,
        justifyContent: 'center',
        color: '#067062',
    },
    textsabt: {

        // marginTop:5,
        fontSize: 14,
        color: '#555',
        fontFamily: 'Vazir-Black',

    },

});




