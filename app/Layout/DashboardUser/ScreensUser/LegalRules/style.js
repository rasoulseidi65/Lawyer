import {StyleSheet} from 'react-native';

const stylesSetOfRules = StyleSheet.create({

    card: {
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
    cardText: {
        flex: 12,
        marginTop: 1,
        color:'red',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    categoryText: {
        fontSize: 16,
        color: '#555',
        fontFamily: 'IRANSansMobile_Bold',
        fontWeight: 'bold',
        // marginLeft: 10,
        flex: 1,
        marginRight: 10,
    },
    buttonLeft: {
        width: 35,
        backgroundColor: '#067062',
        marginLeft: 10,
        height: 35,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    cardImage: {
        height: 195,
        width: null,
    },

});
const stylesDetailSetOfRules = StyleSheet.create({


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
    card: {
        marginTop: 10,
        backgroundColor: '#fff',
        height: 90,
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
    cardText: {
        flex: 12,
        marginTop: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    subCategoryText: {
        fontSize: 16,
        color: '#555',
        fontFamily: "IRANSansMobile_Bold",
        fontWeight: 'bold',
        // marginLeft: 10,
        flex:1,
        marginRight:10
    },
    buttonLeft: {
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

export {stylesSetOfRules, stylesDetailSetOfRules}
