import {Dimensions, StyleSheet} from 'react-native';
const bloodMoney = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    inputContainer: {

        borderBottomColor: '#067062',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:100,
        height:20,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        marginRight:15
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        fontFamily:"IRANSansMobile(FaNum)",
        flex:1,
        color:'#555'
    },
});

const stylesCostLitigation = StyleSheet.create({

    chart: {
        flex: 1,
        marginTop: 5,
        borderRadius: 10,

    },
    header: {
        backgroundColor: '#3d933c',
    },
    headerContent: {
        padding: 45,
        alignItems: 'center',
    },

    card: {
        height:102,

        marginTop:40,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        marginBottom:20,
        marginHorizontal:15,
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
    inputContainer: {

        borderBottomColor: '#067062',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:150,
        height:20,
        // marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        marginRight:15
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        fontFamily:"IRANSansMobile(FaNum)",
        flex:1,
        color:'#555'
    },
});
const stylesLateFees = StyleSheet.create({

    texttitel: {
        color:'#fff',
        marginHorizontal:15,
        fontFamily:"Vazir-Black",
        alignSelf:'center',
        fontSize:16

    },
    title:{
        backgroundColor:'#067062',
        height:25,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        width:'100%',
        shadowRadius: 7.49,
        alignItems:'center',
        justifyContent:'center'
    },
    card: {
        height:80,

        marginTop:40,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        marginBottom:20,
        marginHorizontal:15,
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
    inputContainer: {

        borderBottomColor: '#067062',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:'75%',
        height:20,
        // marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        marginRight:15
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        fontFamily:"IRANSansMobile(FaNum)",
        flex:1,
        color:'#555'
    },
    viwe:{
        flexDirection:'row',marginBottom:40,alignItems:'center',alignSelf:'center',marginTop:15
    }
});
const stylesTaxStamp = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    inputContainer: {

        borderBottomColor: '#067062',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:150,
        height:20,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        marginRight:15
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        fontFamily:"IRANSansMobile(FaNum)",
        flex:1,
        color:'#555'
    },
});
const stylesDowry = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    inputContainer: {

        borderBottomColor: '#067062',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 150,
        height: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        fontFamily: 'IRANSansMobile(FaNum)',
        flex: 1,
        color: '#555',
    },
});
const stylesInheritance = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',


    },
    inputContainer: {

        borderBottomColor: '#067062',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 200,
        height: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        height: 45,
        //marginLeft:16,
        borderBottomColor: '#FFFFFF',
        fontFamily: 'IRANSansMobile(FaNum)',
        // flex:1,
        color: '#555',
    },
});

export {bloodMoney, stylesCostLitigation, stylesLateFees, stylesTaxStamp, stylesDowry, stylesInheritance}
