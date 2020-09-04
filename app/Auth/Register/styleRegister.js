import {Dimensions, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const stylesRegisterUser = StyleSheet.create({
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
    /************ modals ************/
    popup: {
        backgroundColor: '#fff',
    },
    popupOverlay: {
        backgroundColor: '#00000057',
        flex: 1,
    },
    popupContent: {
        //alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    popupButtons: {
        backgroundColor: '#47b03e',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 80,
        width: 65,
        height: 65,
        alignSelf: 'center',

        alignItems: 'center',
        marginBottom: 10,
    },
    modalInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textsabt1: {
        textAlign: 'center',
        alignSelf: 'center',
        marginRight: -10,
        color: '#067062',
        fontFamily: 'Vazir-Black',
        fontSize: 14,
    },
    toch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        borderColor: '#067062',
        borderWidth: 1,
        width: '42%',
        borderRadius: 100,
        height: 40,
    },
    headerContent:{
        padding:20,
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

const stylesRegisterLawyers = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#067062',
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
    text: {
        fontSize: 14,
        color: '#333',
        fontFamily: 'Vazir-Black',
    },
    vakil: {
        color: '#067062',
        marginTop: -40,
        fontSize: 16,
        fontFamily: 'Lalezar-Regular',
    },
    toch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        borderColor: '#067062',
        borderWidth: 1,
        width: '42%',
        borderRadius: 100,
        height: 40,
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
        color: '#000',
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
    /************ modals ************/
    popup: {
        backgroundColor: '#fff',
    },
    popupOverlay: {
        backgroundColor: '#00000057',
        flex: 1,
    },
    popupContent: {
        //alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    popupButtons: {
        backgroundColor: '#47b03e',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 80,
        width: 65,
        height: 65,
        alignSelf: 'center',

        alignItems: 'center',
        marginBottom: 10,
    },
    modalInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textsabt1: {
        textAlign: 'center',
        alignSelf: 'center',
        marginRight: -10,
        color: '#067062',
        fontFamily: 'Vazir-Black',
        fontSize: 14,
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

export { stylesRegisterLawyers,stylesRegisterUser }
