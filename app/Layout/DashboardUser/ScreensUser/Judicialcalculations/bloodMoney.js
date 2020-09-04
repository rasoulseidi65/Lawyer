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
import Header from '../../../../SharedModule/Header/Header';

import {RadioButton, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {bloodMoney} from './styleJudicialcalculations';

export default class Diyat extends Component {
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
            <View style={bloodMoney.container}>
                <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#333'}
                           barStyle="light-content"/>
                <Header title="دیه" onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>
                <ScrollView>
                    <Card style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        height: 200,
                        width: '90%',
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                        borderRadius: 10,
                        shadowOpacity: 0.9,
                        shadowRadius: 7.49,
                        elevation: 12,

                    }}>
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
                                روش محاسبه
                            </Text>
                        </View>

                        <View
                            style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', marginTop: 15}}>

                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)'}}>کسری </Text>
                            <RadioButton
                                color='#067062'
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    this.setState({checked: 'first'});
                                }}/>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row', marginTop: 5}}>

                                <View style={{
                                    backgroundColor: '#fff', height: 40, width: '20%', alignSelf: 'center',
                                    shadowRadius: 7.55,
                                    elevation: 5,
                                     borderRadius: 10,
                                }}>
                                    <TextInput
                                        style={{
                                            alignItems: 'flex-start',
                                            fontSize: 15,
                                            fontFamily: 'Vazir-Black',
                                            color: '#555',
                                        }}
                                        placeholder=""
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <View style={{
                                    backgroundColor: '#fff',
                                    marginHorizontal: 5,
                                    height: 40,
                                    width: '20%',
                                    alignSelf: 'center',
                                    shadowRadius: 7.55,
                                    elevation: 5,
                                    borderRadius: 10,
                                }}>
                                    <TextInput
                                        style={{
                                            alignItems: 'flex-start',
                                            fontSize: 15,
                                            fontFamily: 'Vazir-Black',
                                            color: '#555',
                                        }}
                                        placeholder=""
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <View style={{
                                    backgroundColor: '#fff', height: 40, width: '20%', alignSelf: 'center',
                                    shadowRadius: 7.55,
                                    elevation: 5,
                                    borderRadius: 10,
                                }}>
                                    <TextInput
                                        style={{
                                            alignItems: 'flex-start',
                                            fontSize: 15,
                                            fontFamily: 'Vazir-Black',
                                            color: '#555',
                                        }}
                                        placeholder=""
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <View style={{
                                    backgroundColor: '#fff',
                                    height: 40,
                                    marginHorizontal: 5,
                                    width: '20%',
                                    alignSelf: 'center',
                                    shadowRadius: 7.55,
                                    elevation: 5,

                                    borderRadius: 10,
                                }}>
                                    <TextInput
                                        style={{
                                            alignItems: 'flex-start',
                                            fontSize: 15,
                                            fontFamily: 'Vazir-Black',
                                            color: '#555',
                                        }}
                                        placeholder=""
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                            </View>


                            <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
                                <Divider
                                    style={{width: '17%', marginHorizontal: 6, height: 2, backgroundColor: '#067062'}}
                                />
                                <Divider
                                    style={{width: '17%', marginHorizontal: 7, height: 2, backgroundColor: '#067062'}}
                                />
                                <Divider
                                    style={{width: '17%', height: 2, marginHorizontal: 7, backgroundColor: '#067062'}}
                                />
                                <Divider
                                    style={{width: '17%', height: 2, marginHorizontal: 6, backgroundColor: '#067062'}}
                                />

                            </View>


                            <View style={{flexDirection: 'row', marginTop: 10}}>

                                <View style={{
                                    backgroundColor: '#fff', height: 40, width: '20%', alignSelf: 'center',
                                    shadowRadius: 7.55,
                                    elevation: 5,
                                     borderRadius: 10,
                                }}>
                                    <TextInput
                                        style={{
                                            alignItems: 'flex-start',
                                            fontSize: 15,
                                            fontFamily: 'Vazir-Black',
                                            color: '#555',
                                        }}
                                        placeholder=""
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <View style={{
                                    backgroundColor: '#fff',
                                    marginHorizontal: 5,
                                    height: 40,
                                    width: '20%',
                                    alignSelf: 'center',
                                    shadowRadius: 7.55,
                                    elevation: 5,
                                    borderRadius: 10,
                                }}>
                                    <TextInput
                                        style={{
                                            alignItems: 'flex-start',
                                            fontSize: 15,
                                            fontFamily: 'Vazir-Black',
                                            color: '#555',
                                        }}
                                        placeholder=""
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <View style={{
                                    backgroundColor: '#fff', height: 40, width: '20%', alignSelf: 'center',
                                    shadowRadius: 7.55,
                                    elevation: 5,
                                    borderRadius: 10,
                                }}>
                                    <TextInput
                                        style={{
                                            alignItems: 'flex-start',
                                            fontSize: 15,
                                            fontFamily: 'Vazir-Black',
                                            color: '#555',
                                        }}
                                        placeholder=""
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <View style={{
                                    backgroundColor: '#fff',
                                    height: 40,
                                    marginHorizontal: 5,
                                    width: '20%',
                                    alignSelf: 'center',
                                    shadowRadius: 7.55,
                                    elevation: 5,
                                    borderRadius: 10,
                                }}>
                                    <TextInput
                                        style={{
                                            alignItems: 'flex-start',
                                            fontSize: 15,
                                            fontFamily: 'Vazir-Black',
                                            color: '#555',
                                        }}
                                        placeholder=""
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                            </View>

                        </View>

                    </Card>
                    <Card style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        height: 60,
                        width: '90%',
                        alignSelf: 'center',
                        justifyContent: 'space-between',
                        marginTop: 20,
                        borderRadius: 10,
                        shadowOpacity: 0.9,
                        shadowRadius: 7.49,
                        elevation: 12,
                    }}>
                        <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'space-between'}}>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                alignSelf: 'center',
                                marginLeft: 15,
                            }}>
                                <Icon
                                    style={{marginHorizontal: 10}}
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
                                    style={{marginHorizontal: 10}}
                                    name='plus-circle'
                                    color='#067062'
                                    onPress={() => this.increaseCounter()}
                                    size={25}
                                />
                            </View>
                            <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                <Text style={{
                                    fontSize: 13,
                                    color: '#555',
                                    marginRight: 25,
                                    fontFamily: 'Vazir-Black',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-end',
                                }}>سال دیه </Text>

                            </View>
                        </View>


                    </Card>
                    <Card style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        height: 120,
                        width: '90%',
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                        borderRadius: 10,
                        shadowOpacity: 0.9,
                        marginBottom: 50,
                        shadowRadius: 7.49,
                        elevation: 12,
                    }}>
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
                                روش محاسبه
                            </Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignSelf: 'flex-end',
                            marginTop: 15,
                            marginRight: 14,
                        }}>
                            <View style={bloodMoney.inputContainer}>
                                <Text style={{fontSize: 20}}>%</Text>
                                <TextInput style={bloodMoney.inputs}

                                           keyboardType='number-pad'
                                           underlineColorAndroid='transparent'
                                           onChangeText={(email) => this.setState({email})}/>
                            </View>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)'}}>درصدی </Text>
                            <RadioButton
                                color='#067062'
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    this.setState({checked: 'second'});
                                }}/>

                        </View>
                    </Card>

                </ScrollView>
                <Button buttonStyle={{
                    marginHorizontal: 20, marginVertical: 18, backgroundColor: '#067062', borderRadius: 10, height: 40,
                    shadowColor: '#067062',
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,

                }}
                        onPress={() => this.props.navigation.navigate('inher')}
                        titleStyle={{color: '#fff', fontFamily: 'IRANSansMobile_Bold'}}

                        title="محاسبه"
                />
            </View>
        );
    }
}
