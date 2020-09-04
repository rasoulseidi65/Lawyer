import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor,
    ScrollView, FlatList, Image, TextInput, StatusBar,
} from 'react-native';
import Select2 from 'react-native-select-two';
import {Tab, Tabs, TabHeading} from 'native-base';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Header from '../../../../SharedModule/Header/Header';
import {stylesLateFees} from './styleJudicialcalculations';

export default class penalty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counteryear: 1370,
            countermounth: 1,
        };
    }

    increaseCounter = () => {
        this.setState({counter: this.state.counter + 1});
    };
    decreaseCounter = () => {
        this.setState({counter: this.state.counter - 1});
    };

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#333'}
                           barStyle="light-content"/>
                <Header title="جریمه دیرکرد" onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>
                <Tabs tabBarUnderlineStyle={{backgroundColor: '#067062', height: 4}} initialPage={1}>

                    <Tab
                        heading={<TabHeading style={{backgroundColor: '#fff'}}>
                            <Text style={{color: '#067062', fontFamily: 'Vazir-Black'}}>سالانه</Text>


                        </TabHeading>}>
                        <ScrollView>

                            <Card style={[stylesLateFees.card]}>
                                <View style={stylesLateFees.title}>
                                    <Text style={stylesLateFees.texttitel}> سال تادیه
                                    </Text>
                                </View>

                                <View style={stylesLateFees.viwe}>
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
                                    }}>{this.state.counteryear}</Text>
                                    <Icon
                                        style={{marginHorizontal: 30}}
                                        name='plus-circle'
                                        color='#067062'
                                        onPress={() => this.increaseCounter()}
                                        size={25}
                                    />
                                </View>

                            </Card>

                            <Card style={[stylesLateFees.card]}>
                                <View style={stylesLateFees.title}>
                                    <Text style={stylesLateFees.texttitel}> سال سر رسید
                                    </Text>
                                </View>
                                <View style={stylesLateFees.viwe}>
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
                                    }}>{this.state.counteryear}</Text>
                                    <Icon
                                        style={{marginHorizontal: 30}}
                                        name='plus-circle'
                                        color='#067062'
                                        onPress={() => this.increaseCounter()}
                                        size={25}
                                    />
                                </View>


                            </Card>

                            <View style={{flex: 1, backgroundColor: '#fff'}}>
                                <Card style={[stylesLateFees.card]}>
                                    <View style={stylesLateFees.title}>
                                        <Text style={stylesLateFees.texttitel}> مبلغ به دین را به ریال وارد کنید
                                        </Text>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        alignSelf: 'flex-end',
                                        marginTop: 15,
                                        marginBottom: 25,
                                        marginRight: 14,
                                    }}>

                                        <View style={stylesLateFees.inputContainer}>
                                            <Text style={{marginLeft: 5}}> ریال</Text>
                                            <TextInput style={stylesLateFees.inputs}

                                                       keyboardType='number-pad'
                                                       underlineColorAndroid='transparent'
                                                       onChangeText={(email) => this.setState({email})}/>
                                        </View>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>مبلغ دین </Text>


                                    </View>
                                </Card>


                            </View>
                        </ScrollView>
                        <View style={{backgroundColor: '#fff'}}>
                            <Button buttonStyle={{
                                marginHorizontal: 20,
                                marginVertical: 18,
                                backgroundColor: '#067062',
                                borderRadius: 10,
                                height: 40,
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


                    </Tab>

                    <Tab
                        heading={<TabHeading style={{backgroundColor: '#fff'}}>
                            <Text style={{color: '#067062', fontFamily: 'Vazir-Black'}}>ماهانه</Text>


                        </TabHeading>}>
                        <ScrollView>
                            <Card style={[stylesLateFees.card]}>
                                <View style={stylesLateFees.title}>
                                    <Text style={stylesLateFees.texttitel}> ماه سر رسید
                                    </Text>
                                </View>

                                <View style={stylesLateFees.viwe}>
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
                                    }}>{this.state.countermounth}</Text>
                                    <Icon
                                        style={{marginHorizontal: 30}}
                                        name='plus-circle'
                                        color='#067062'
                                        onPress={() => this.increaseCounter()}
                                        size={25}
                                    />
                                </View>

                            </Card>
                            <Card style={[stylesLateFees.card]}>
                                <View style={stylesLateFees.title}>
                                    <Text style={stylesLateFees.texttitel}> سال دیه
                                    </Text>
                                </View>

                                <View style={stylesLateFees.viwe}>
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
                                    }}>{this.state.counteryear}</Text>
                                    <Icon
                                        style={{marginHorizontal: 30}}
                                        name='plus-circle'
                                        color='#067062'
                                        onPress={() => this.increaseCounter()}
                                        size={25}
                                    />
                                </View>

                            </Card>
                            <Card style={[stylesLateFees.card]}>
                                <View style={stylesLateFees.title}>
                                    <Text style={stylesLateFees.texttitel}> ماه سر رسید
                                    </Text>
                                </View>
                                <View style={stylesLateFees.viwe}>
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
                                    }}>{this.state.countermounth}</Text>
                                    <Icon
                                        style={{marginHorizontal: 30}}
                                        name='plus-circle'
                                        color='#067062'
                                        onPress={() => this.increaseCounter()}
                                        size={25}
                                    />
                                </View>


                            </Card>
                            <Card style={[stylesLateFees.card]}>
                                <View style={stylesLateFees.title}>
                                    <Text style={stylesLateFees.texttitel}> سال سر رسید
                                    </Text>
                                </View>
                                <View style={stylesLateFees.viwe}>
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
                                    }}>{this.state.counteryear}</Text>
                                    <Icon
                                        style={{marginHorizontal: 30}}
                                        name='plus-circle'
                                        color='#067062'
                                        onPress={() => this.increaseCounter()}
                                        size={25}
                                    />
                                </View>


                            </Card>

                            <View style={{flex: 1, backgroundColor: '#fff'}}>
                                <Card style={[stylesLateFees.card]}>
                                    <View style={stylesLateFees.title}>
                                        <Text style={stylesLateFees.texttitel}> مبلغ به دین را به ریال وارد کنید
                                        </Text>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        alignSelf: 'flex-end',
                                        marginTop: 15,
                                        marginBottom: 25,
                                        marginRight: 14,
                                    }}>

                                        <View style={stylesLateFees.inputContainer}>
                                            <Text style={{marginLeft: 5}}> ریال</Text>
                                            <TextInput style={stylesLateFees.inputs}

                                                       keyboardType='number-pad'
                                                       underlineColorAndroid='transparent'
                                                       onChangeText={(email) => this.setState({email})}/>
                                        </View>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>مبلغ دین </Text>


                                    </View>
                                </Card>


                            </View>
                        </ScrollView>
                        <View style={{backgroundColor: '#fff'}}>
                            <Button buttonStyle={{
                                marginHorizontal: 20,
                                marginVertical: 18,
                                backgroundColor: '#067062',
                                borderRadius: 10,
                                height: 40,
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
                    </Tab>
                </Tabs>
            </SafeAreaView>
        );
    }
}

