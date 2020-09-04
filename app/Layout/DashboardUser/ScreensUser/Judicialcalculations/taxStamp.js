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
import {Button} from 'react-native-elements';
import {RadioButton} from 'react-native-paper';
import {stylesTaxStamp} from './styleJudicialcalculations';

export default class TaxStamp extends Component {
    state = {
        checked: 'first',
        counter: 0,
    };

    render() {
        const {checked} = this.state;
        return (
            <View style={stylesTaxStamp.container}>
                <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#333'}
                           barStyle="light-content"/>
                <Header title="تمبر مالیاتی" onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>


                <ScrollView>

                    <Card style={{
                        backgroundColor: '#fff',
                        height: 158,
                        width: '87%',
                        alignSelf: 'center',
                        justifyContent: 'space-between',
                        marginTop: 50,
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
                                تمبر مالیاتی بر اساس
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: 'column',
                            alignSelf: 'flex-end',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            marginTop: -20,
                        }}>
                            <View style={{flexDirection: 'row', marginTop: -20}}>
                                <Text style={{fontFamily: 'IRANSansMobile(FaNum)'}}>حق الوکاله</Text>
                                <RadioButton
                                    value="first"
                                    color='#067062'
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        this.setState({checked: 'first'});
                                    }}/>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontFamily: 'IRANSansMobile(FaNum)'}}>بهای خواسته (قطعی در مرحله
                                    بدوی)</Text>
                                <RadioButton
                                    value="second"
                                    color='#067062'
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        this.setState({checked: 'second'});
                                    }}/>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontFamily: 'IRANSansMobile(FaNum)', marginBottom: 5}}>بهای خواسته
                                    (غیرقطعی در مرحله بدوی)</Text>
                                <RadioButton
                                    color='#067062'
                                    value="third"
                                    status={checked === 'third' ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        this.setState({checked: 'third'});
                                    }}/>
                            </View>
                        </View>
                    </Card>
                    <Card style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        height: 80,
                        width: '90%',
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                        borderRadius: 10,
                        shadowOpacity: 0.9,
                        shadowRadius: 7.49,
                        elevation: 12,
                        marginBottom: 50,
                    }}>


                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignSelf: 'flex-end',
                            marginTop: 15,
                            marginRight: 14,
                        }}>

                            <View style={stylesTaxStamp.inputContainer}>
                                <Text style={{marginLeft: 5}}> ریال</Text>
                                <TextInput style={stylesTaxStamp.inputs}

                                           keyboardType='number-pad'
                                           underlineColorAndroid='transparent'
                                           onChangeText={(email) => this.setState({email})}/>
                            </View>
                            <Text style={{fontFamily: 'Vazir-Black'}}>هزینه به ریال</Text>


                        </View>
                    </Card>

                </ScrollView>
                <Button buttonStyle={{
                    marginHorizontal: 20, marginVertical: 20, backgroundColor: '#067062', borderRadius: 10, height: 45,
                    shadowColor: '#067062',
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,

                }}
                        onPress={() => this.props.navigation.navigate('sel')}
                        titleStyle={{color: '#fff', fontFamily: 'IRANSansMobile_Bold'}}

                        title="محاسبه"
                />
            </View>
        );
    }
}
