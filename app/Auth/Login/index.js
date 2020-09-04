import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    StatusBar,
    Dimensions,
    BackHandler,
    ScrollView,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//................icons....................................
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    backPressed = () => {
        let {routeName} = this.props.navigation.state;
        console.log('route is :  ' + routeName);

        if (this.props.navigation.isFocused()) {
            console.log('ROUTE :  ' + routeName);

            Alert.alert(
                'خروج',
                'ایا قصد خروج دارید؟',
                [
                    {
                        text: 'خیر',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {text: 'بله', onPress: () => BackHandler.exitApp(), style: 'yes'},
                ],
                {cancelable: false},
            );
            return true;
        } else {
            return false;
        }
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                    translucent={true}
                    networkActivityIndicatorVisible={true}
                    backgroundColor={'#0078db'}
                    barStyle="light-content"
                />

                <View style={styles.headerContent}>
                    <Image style={styles.avatar}
                           source={require('../../../assets/image/ss1.png')}/>
                    <Text style={styles.vakil}>وکیل شما</Text>

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
                    به اپلیکیشن وکیل شما خوش آمدید
                </Text>

                <ScrollView style={styles.card1}>
                    <View style={styles.card2}>
                        <View style={{marginTop: 100}}>
                            <Button
                                buttonStyle={{
                                    marginHorizontal: 45,
                                    height: 45,
                                    backgroundColor: '#067062',
                                    borderRadius: 30,
                                    shadowColor: '#067062',
                                    marginVertical: 20,
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 0.37,
                                    shadowRadius: 7.49,
                                    elevation: 12,
                                }}
                                onPress={() => this.props.navigation.navigate('login')}
                                titleStyle={{color: '#fff', fontFamily: 'Vazir-Black'}}
                                title="وکلا و اشخاص حقوقی"
                            />
                            <Button
                                buttonStyle={{
                                    marginHorizontal: 45,
                                    height: 45,
                                    backgroundColor: '#067062',
                                    borderRadius: 30,
                                    shadowColor: '#067062',
                                    marginVertical: 20,
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 0.37,
                                    shadowRadius: 7.49,
                                    elevation: 12,
                                }}
                                onPress={() => this.props.navigation.navigate('loginuser')}
                                titleStyle={{color: '#fff', fontFamily: 'Vazir-Black'}}
                                title="کاربران معمولی"
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

    /*** card *****/

    title: {
        fontSize: 14,
        flex: 2,
        marginHorizontal: -15,
        fontFamily: 'Vazir-Black',
        marginVertical: 1,
        color: '#067062',
    },
    // ...........کارد اصلی...........
    card1: {
        width: '100%',
        marginTop: 40,
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

        shadowOffset: {
            width: 0,
            height: 2,
            marginRight: 16,
        },

        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
    },
    textstyle: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        marginBottom: 18,
    },
    vakil: {
        color: '#067062',
        marginTop: -40,
        fontSize: 18,
        fontFamily: 'Lalezar-Regular',
    },
    ViewStyle: {
        backgroundColor: '#fff',
        height: 130,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 70,
        shadowOpacity: 0.9,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 100,
        shadowOffset: {
            width: 20,
            height: 5,
        },
    },

    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#e2e2e2',
        borderRadius: 30,

        width: '80%',
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
        color: '#333',
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
    headerContent: {
        marginTop: 30,
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
