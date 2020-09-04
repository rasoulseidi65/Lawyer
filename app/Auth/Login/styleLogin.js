import {Dimensions, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const stylesLoginLawyers = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#067062',
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
        fontFamily: 'Vazir-Black',
        marginVertical: 1,
        color: '#067062',
    },
    vakil: {
        color: '#067062',
        marginTop: -40,
        fontSize: 20,
        fontFamily: 'Lalezar-Regular',
    },
    // ...........کارد اصلی...........
    card1: {
        width:'100%',
        marginTop:20,
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
        width:'100%',
        marginTop:20,
        alignSelf: 'center',


        shadowColor: '#3d933c',
        backgroundColor: '#fff',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
    },
    textstyle: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        marginBottom: 18,
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
    headerContent:{

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
const stylesLoginUser = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#067062',
    },

    /*** card *****/

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
        fontFamily: 'Vazir-Black',
        marginVertical: 1,
        color: '#067062',
    },

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

export { stylesLoginLawyers,stylesLoginUser }
