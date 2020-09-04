import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity, StatusBar,
} from 'react-native';
import {Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import Header from '../../../../SharedModule/Header/Header';
import {stylesDowry} from './styleJudicialcalculations';

export default class Dowry extends Component {
    state = {
        checked: 'first',
        counter: 1370,
    };
    increaseCounter = () => {
        this.setState({counter: this.state.counter + 1});
    };
    decreaseCounter = () => {
        this.setState({counter: this.state.counter - 1});
    };

    render() {
        const {checked} = this.state;
        return (
            <View style={stylesDowry.container}>
                <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#333'}
                           barStyle="light-content"/>
                <Header title="مهریه" onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>

                <ScrollView>
                    <Card style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        flexDirection: 'column-reverse',
                        height: 120,
                        width: '90%',
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 50,
                        borderRadius: 10,
                        shadowOpacity: 0.9,
                        shadowRadius: 7.49,
                        elevation: 12,
                    }}>

                        <Text style={{fontFamily: 'Vazir-Black', fontSize: 12, marginBottom: 12, color: '#555'}}>سال
                            تادیه باید از سال عقد بزرگتر باشد .</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon
                                style={{marginHorizontal: 30}}
                                name='minus-circle'
                                color='#067062'
                                onPress={() => this.decreaseCounter()}
                                size={25}
                            />
                            <Text style={{
                                fontFamily: 'IRANSansMobile(FaNum)',
                                color: '#067062',
                            }}>{this.state.counter}</Text>
                            <Icon
                                style={{marginHorizontal: 30}}
                                name='plus-circle'
                                color='#067062'
                                onPress={() => this.increaseCounter()}
                                size={25}
                            />
                        </View>


                        <View style={{
                            backgroundColor: '#067062',
                            height: 30,
                            borderTopRightRadius: 5,
                            borderTopLeftRadius: 5,
                            width: '100%',
                            shadowRadius: 7.49,
                        }}>
                            <Text style={{
                                color: '#fff',
                                marginHorizontal: 15,
                                fontFamily: 'Vazir-Black',
                                alignSelf: 'center',
                                fontSize: 16,
                            }}>
                                سال تادیه
                            </Text>
                        </View>

                    </Card>
                    <Card style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        flexDirection: 'column-reverse',
                        height: 110,
                        width: '90%',
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 30,
                        borderRadius: 10,
                        shadowOpacity: 0.9,
                        shadowRadius: 7.49,
                        elevation: 12,
                    }}>

                        <View style={{flexDirection: 'row', marginBottom: 40, alignItems: 'center'}}>
                            <Icon
                                style={{marginHorizontal: 30}}
                                name='minus-circle'
                                color='#067062'
                                onPress={() => this.decreaseCounter()}
                                size={25}
                            />
                            <Text style={{
                                fontFamily: 'IRANSansMobile(FaNum)',
                                color: '#067062',
                            }}>{this.state.counter}</Text>
                            <Icon
                                style={{marginHorizontal: 30}}
                                name='plus-circle'
                                color='#067062'
                                onPress={() => this.increaseCounter()}
                                size={25}
                            />
                        </View>

                        <View style={{
                            backgroundColor: '#067062',
                            height: 30,
                            borderTopRightRadius: 5,
                            borderTopLeftRadius: 5,
                            width: '100%',
                            shadowRadius: 7.49,
                        }}>
                            <Text style={{
                                color: '#fff',
                                marginHorizontal: 15,
                                fontFamily: 'Vazir-Black',
                                alignSelf: 'center',
                                fontSize: 16,
                            }}>
                                سال عقد
                            </Text>
                        </View>


                    </Card>

                    <Card style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        height: 80,
                        width: '90%',
                        alignSelf: 'center',
                        marginBottom: 25,
                        alignItems: 'center',
                        marginTop: 30,
                        borderRadius: 10,
                        shadowOpacity: 0.9,
                        shadowRadius: 7.49,
                        elevation: 12,

                    }}>


                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignSelf: 'flex-end',
                            marginTop: 15,
                            marginBottom: 25,
                            marginRight: 14,
                        }}>

                            <View style={stylesDowry.inputContainer}>
                                <TextInput style={stylesDowry.inputs}

                                           keyboardType='number-pad'
                                           underlineColorAndroid='transparent'
                                           onChangeText={(email) => this.setState({email})}/>
                            </View>
                            <Text style={{fontFamily: 'Vazir-Black'}}>مبلغ عقد نامه به ریال</Text>


                        </View>
                    </Card>

                </ScrollView>

                <Button buttonStyle={{
                    marginHorizontal: 20, marginVertical: 10,
                    backgroundColor: '#067062', borderRadius: 10, height: 40,
                    shadowColor: '#067062',
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,

                }}
                        onPress={() => this.props.navigation.navigate('Diyat')}
                        titleStyle={{color: '#fff', fontFamily: 'IRANSansMobile_Bold'}}

                        title="محاسبه"
                />
            </View>

        );
    }
}
