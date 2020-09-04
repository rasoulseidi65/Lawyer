import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Image, StatusBar, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import Header from '../../../../SharedModule/Header/Header';


export default class Consultant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            starCount: 5,
            mobile_no: '09120435841',

            modalVisible: false,
            userSelected: [],
            data: [
                {id: 1, title: 'پگاه سپهوند', subtitle3: 'متخصص روانشناس', image: require('../../../../../assets/image/42.jpeg')},
                {id: 2, title: 'تارا نظری', subtitle3: 'مشاوره خانواده', image: require('../../../../../assets/image/tt.png')},
                {id: 3, title: 'زینب اکبریان', subtitle3: 'بالینی روانشناس', image: require('../../../../../assets/image/zz.jpg')},
                {id: 4, title: 'محمدرضا ملکی', subtitle3: 'مشاور و روانشناس', image: require('../../../../../assets/image/mm.jpg')},

            ],
        };
    }


    clickEventListener = (item) => {
        this.setState({userSelected: item}, () => {
            this.setModalVisible(true);
        });
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {

        return (
            <View style={styles.container}>
                <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#333'}
                           barStyle="light-content"/>
                <Header title='لیست مشاوران' onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>

                <View style={{marginTop: 10, flex: 1}}>
                    <FlatList
                        extraData={this.state}
                        data={this.state.data}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({item}) => {
                            return (
                                <View style={styles.box}>
                                    <TouchableOpacity onPress={() => {
                                        this.props.navigation.navigate('detail');
                                    }}>
                                        <View style={styles.v2}>
                                            <Icon
                                                name="angle-left"
                                                color='#fff'
                                                style={{fontSize: 30, marginRight: 5, marginBottom: 2}}
                                            />
                                        </View>
                                    </TouchableOpacity>

                                    <View style={styles.boxContent}>

                                        <Text style={styles.title}>{item.title}</Text>

                                        <View style={{
                                            flexDirection: 'row-reverse',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                        }}>
                                            <View>
                                                <StarRating
                                                    starStyle={{marginTop: 5, margin: 1}}
                                                    disabled={false}
                                                    emptyStar={'ios-star-outline'}
                                                    fullStar={'star'}
                                                    halfStar={'ios-star-half'}
                                                    iconSet={'FontAwesome'}
                                                    maxStars={5}
                                                    rating={this.state.starCount}
                                                    // selectedStar={(rating) => this.onStarRatingPress(rating,item.id)}
                                                    fullStarColor={'orange'}
                                                    starSize={16}
                                                />
                                            </View>


                                        </View>
                                        <Text style={styles.subtitle}>{item.subtitle3}</Text>
                                        <View style={styles.buttons}>
                                            <TouchableOpacity style={[styles.button, styles.view]} onPress={() => {
                                                Linking.openURL(
                                                    'http://api.whatsapp.com/send?phone=98' + this.state.mobile_no,
                                                );
                                            }}>
                                                <Icon style={styles.icon} name='video-camera'/>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={[styles.button, styles.view]}
                                                              onPress={() => this.props.navigation.navigate('payment')}>
                                                <Icon style={styles.icon} name='commenting-o'/>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={[styles.button, styles.view]}
                                                              onPress={() => this.props.navigation.navigate('payment')}>
                                                <Icon style={styles.icon} name='phone'/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Image style={styles.image} source={item.image}/>
                                </View>
                            );
                        }}/>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop:20,
        backgroundColor: '#ebf0f7',
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 60,
    },
    v2: {

        width: 30,
        marginTop: 30,
        backgroundColor: '#067062',
        //  marginRight: 80,
        height: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    box: {
        width: '90%',
        height: 125,
        padding: 20,
        marginTop: 5,
        marginBottom: 7,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginHorizontal: 15,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2,
        },
        elevation: 2,

    },
    boxContent: {
        flex: 1,
        marginTop: -10,
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        color: '#555',
        fontFamily: 'Vazir-Black',
    },
    subtitle: {

        fontSize: 12,
        color: '#646464',
        fontFamily: 'Vazir-Black',
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        width: 30,
        marginRight: -5,
        marginTop: 5,
        margin: 10,
    },
    icon: {
        fontSize: 16,
        color: '#fff',
    },
    view: {
        backgroundColor: '#067062',
    },
    profile: {
        backgroundColor: '#1E90FF',
    },
    message: {
        backgroundColor: '#228B22',
    },
});
