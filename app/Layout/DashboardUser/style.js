import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#067062',

    },


    /******** card **************/
    card: {
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 13,
        marginHorizontal: 40,
        backgroundColor: '#067062',
        flexBasis: '42%',
        width: 90,
        height: 90,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
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
        fontFamily: 'Vazir-Black', marginVertical: 1,
        color: '#067062',

    },
    vakil: {
        color: '#067062',
        marginTop: -40, fontSize: 20,
        fontFamily: 'Lalezar-Regular',

    },
    // ...........کارد اصلی...........
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


export {stylesHome};
