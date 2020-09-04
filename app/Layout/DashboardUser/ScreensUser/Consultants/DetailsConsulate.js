import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, ScrollView, Dimensions, Image} from 'react-native';
import {Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import StarRating from 'react-native-star-rating';
import {TouchableOpacity} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import call from 'react-native-phone-call';
import Communications from 'react-native-communications';

export default class DetailsConsulate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            starCount: 5,
        };
    }

    call = () => {
        //handler to make a call
        const args = {
            number: '09120435841',
            prompt: false,
        };
        call(args).catch(console.error);
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#0078db'}
                           barStyle="light-content"/>
                <ScrollView>
                    <View style={{
                        padding: 80,
                        backgroundColor: '#067062',
                    }}>

                    </View>


                    <Card style={styles.card}>
                        <Image
                            style={styles.img}
                            source={require('../../../../../assets/image/pm.jpg')}
                        />
                        <Text style={styles.name}>پگاه سپهوند</Text>
                        <View style={styles.vs}>
                            <TouchableOpacity style={styles.vv} onPress={() => Communications.text('09058977229')}
                                              style={styles.vs}>

                                <Text style={styles.tm}>
                                    ارسال پیام
                                </Text>

                            </TouchableOpacity>
                            <Text style={styles.ts}>(4.9)</Text>
                            <StarRating
                                starStyle={{marginTop: 5}}
                                disabled={false}
                                emptyStar={'ios-star-outline'}
                                fullStar={'star'}
                                halfStar={'ios-star-half'}
                                iconSet={'FontAwesome'}
                                maxStars={5}
                                rating={this.state.starCount}
                                // selectedStar={(rating) => this.onStarRatingPress(rating,item.id)}
                                fullStarColor={'#FBC00B'}
                                starSize={16}
                            />
                        </View>
                        <View style={styles.vs1}>
                            <Text style={styles.ts1}>+1000</Text>
                            <Icon
                                style={{color: '#888', marginRight: 7, marginTop: 6}}
                                name='phone'
                                size={18}/>
                            <Text style={styles.ts1}>8</Text>
                            <Icon
                                style={{color: '#888', marginTop: 5}}
                                name='commenting'
                                size={18}/>
                        </View>
                        <Text style={styles.txs}>متخصص روانشناس</Text>
                        <TouchableOpacity style={styles.vv1} onPress={this.call}>
                            <Text style={styles.tm1}>
                                تماس تلفنی 25,000 تومان
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.vv2}>
                            <Text style={styles.tm1}>
                                مشاوره ویدیوئی 65,000 تومان
                            </Text>
                        </View>
                    </Card>

                    <Card style={styles.cardd}>
                        <View style={styles.vcdd}>
                            <Text style={styles.tdd}>
                                درباره ی من</Text>

                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignSelf: 'flex-end',
                            marginTop: 15,
                            marginRight: 14,
                        }}>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)'}}>دکتری تخصصی روانشناسی - عضو سازمان نظام
                                روانشناسی - مدرس دانشگاه - سابقه 9 سال مشاوره حضوری</Text>


                        </View>
                    </Card>
                    <Card style={styles.cardd}>
                        <View style={styles.vcdd}>
                            <Text style={styles.tdd}>ساعت کاری</Text>

                        </View>

                        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 15, marginRight: 14}}>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', marginRight: 50}}>00:00 تا 24:00</Text>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', marginLeft: 50}}>* شنبه</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 5, marginRight: 14}}>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', marginRight: 40}}>00:00 تا 24:00</Text>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', marginLeft: 45}}>* دوشنبه</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 5, marginRight: 14}}>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', marginRight: 40}}>00:00 تا 24:00</Text>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', marginLeft: 35}}>* چهارشنبه</Text>
                        </View>
                    </Card>

                </ScrollView>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cardd: {
        flex: 1,
        backgroundColor: '#fff',
        height: 150,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 10,
        shadowOpacity: 0.9,
        // marginBottom:50,
        shadowRadius: 7.49,
        elevation: 12,
    },
    vcdd: {
        backgroundColor: '#067062',
        alignSelf: 'center',
        alignItems: 'center',
        height: 30,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        width: '100%',
        shadowRadius: 7.49,
    },
    vcdd1: {
        backgroundColor: '#067062',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        // alignSelf:'center',
        // alignItems:'center',
        height: 30,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        width: '100%',
        shadowRadius: 7.49,
    },
    tdd: {
        color: '#fff',
        fontFamily: 'Vazir-Black',
        marginBottom: 2,
        marginHorizontal: 15,
        alignSelf: 'flex-end',
        fontSize: 13,
    },
    tdd1: {
        color: '#fff',
        fontFamily: 'Vazir-Black',
        // marginHorizontal:15,
        alignSelf: 'flex-start',
        fontSize: 13,
    },
    tdd2: {
        color: '#fff',
        // fontFamily:"Vazir-Black",
        marginHorizontal: 15,
        alignSelf: 'center',
        // alignItems:'flex-start',
        // justifyContent:'flex-start',
        fontSize: 10,
    },
    vs: {
        flex: 1,
        alignSelf: 'center',
        marginHorizontal: 10,
        marginTop: 15,
        flexDirection: 'row',
    },
    vs1: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    txs: {
        // flex:4,
        alignSelf: 'center',
        fontSize: 15,
        color: '#cdcdcd',
        marginBottom: 20,
        fontFamily: 'Vazir-Black',
    },
    txt: {
        fontSize: 15,
        color: 'white',
        marginTop: -30,
        fontFamily: 'Vazir-Black',
        alignSelf: 'center',
        // justifyContent:'center',
        // alignItems:'center',
        marginBottom: 40,

    },
    vv: {
        width: 65,
        height: 30,
        borderColor: '#067062',
        borderWidth: 1,
        backgroundColor: '#e2e2e2',
        marginRight: 5,
        borderRadius: 20,
    },
    tm: {
        color: '#067062',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 2,
        fontSize: 10,
        fontFamily: 'IRANSansMobile(FaNum)_Black',
    },
    tm1: {
        color: '#067062',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 2,
        fontSize: 13,
        fontFamily: 'IRANSansMobile(FaNum)_Black',
    },
    vv1: {
        // flex:1,
        alignSelf: 'center',
        marginBottom: 20,
        width: '85%',
        height: 43,
        justifyContent: 'center',
        borderColor: '#067062',
        borderWidth: 1,
        backgroundColor: '#e2e2e2',
        borderRadius: 20,
    },
    vv2: {
        // flex:1,
        alignSelf: 'center',
        marginBottom: 15,
        width: '85%',
        height: 43,
        justifyContent: 'center',
        borderColor: '#067062',
        borderWidth: 1,
        backgroundColor: '#e2e2e2',
        borderRadius: 20,
    },
    ts: {
        fontFamily: 'IRANSansMobile(FaNum)_Black',

        marginRight: 5,
        color: '#cdcdcd',
    },
    ts2: {
        fontFamily: 'IRANSansMobile(FaNum)_Black',
        alignSelf: 'flex-end',
        fontSize: 10,
        marginRight: 10,
        color: '#cdcdcd',
    },
    ts1: {
        fontFamily: 'IRANSansMobile(FaNum)_Black',
        fontSize: 15,
        marginRight: 10,
        color: '#cdcdcd',
    },
    View: {
        alignSelf: 'center',
        backgroundColor: '#067062',
        width: '100%',
        height: 230,
    },
    img: {
        width: 80,
        height: 80,
        marginTop: -30,
        shadowRadius: 7.49,
        alignSelf: 'center',
        shadowOpacity: 0.9,

        backgroundColor: 'white',
        borderRadius: 100,

    },
    name: {
        fontSize: 15,
        marginTop: 5,
        alignSelf: 'center',
        fontFamily: 'Vazir-Black',
        color: '#555',
    },
    card: {
        width: '90%',
        marginTop: -80,
        alignSelf: 'center',
        height: 320,

        shadowColor: '#3d933c',
        shadowOffset: {
            width: 0,
            height: 2,
            marginRight: 16,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 12,
        borderRadius: 30,

    },

    // view1: {
    //     shadowColor: '#474747',
    //     marginTop: 50,
    //     shadowOffset: {
    //         width: 0,
    //         height: 6,
    //     },
    //     shadowOpacity: 0.37,
    //     shadowRadius: 7.49,
    //     borderRadius: 10,

    //     elevation: 13,
    //     alignSelf: 'center',
    //     backgroundColor: "#fff",
    //     width: '80%',
    //     height: 230,

    // },

});
