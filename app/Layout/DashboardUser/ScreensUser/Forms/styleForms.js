import {Dimensions, StyleSheet} from 'react-native';
const stylesForms = StyleSheet.create({


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
        marginHorizontal: 15,
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
});
const stylesPetition = StyleSheet.create({


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
        fontFamily: "IRANSansMobile(FaNum)_Bold",

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




export {stylesForms,stylesPetition }
