import {StyleSheet} from 'react-native';
const stylesNews = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9FC1BC',

    },
    list: {
        //  paddingHorizontal:20,
        backgroundColor: '#E6E6E6',

    },
    listContainer: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        marginTop: 10,

        // marginRight:5,

        width: '90%',
        height: '93%',
        borderRadius: 10,
        backgroundColor: '#067062',
        alignSelf: 'center',
    },
    image1: {
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
        //width: 180,
        height: 180,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    name: {
        fontSize: 10,
        marginHorizontal: 15,
        marginTop: 20,
        fontFamily: 'IRANSansMobile_Bold',
        color: '#fff',
    },
    name1: {
        fontSize: 10,
        marginHorizontal: 15,
        marginTop: 20,
        flex: 1,

        fontFamily: 'IRANSansMobile_Bold',
        color: '#067062',

    },
    name2: {
        fontSize: 10,
        fontFamily: 'IRANSansMobile(FaNum)',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginTop: 5,
        color: '#067062',
        marginLeft: 20,
    },
    name3: {
        fontSize: 10,
        fontFamily: 'IRANSansMobile(FaNum)',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        color: '#067062',
        marginLeft: 20,
        // marginTop:20,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
         marginTop: 10,


    },
    buttonContainer: {
        height: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        // alignSelf:'center',
        marginTop: 10,
        width: '90%',
        borderRadius: 30,
    },
    sendButton: {
        backgroundColor: '#067062',
    },
    buttonText: {
        fontSize: 10,
        color: 'white',
        fontFamily: 'IRANSansMobile_Bold',
    },
    sendButton1: {
        backgroundColor: 'white',
    },
    buttonText1: {
        fontSize: 10,
        color: '#067062',
        fontFamily: 'IRANSansMobile_Bold',
    },
    name4: {
        fontSize: 10,
        fontFamily: 'IRANSansMobile(FaNum)',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginTop: 5,
        color: '#fff',
        marginLeft: 20,
    },
    name5: {
        fontSize: 10,
        fontFamily: 'IRANSansMobile(FaNum)',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        color: '#fff',
        marginLeft: 20,
    },
    box: {

        alignSelf: 'center',
        width: '45%',
        margin: 15,
        height: 200,
        borderRadius: 5,
        marginTop: 15,

        backgroundColor: 'white',
        // flexDirection: 'row',
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    info: {
        flex: 1,
        flexDirection: 'column',
    },
    // listContainer:{
    //   marginHorizontal:25
    // }

});


export {stylesNews}
