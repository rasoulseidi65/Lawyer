import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor,
    ScrollView, FlatList, Image, TextInput, StatusBar,
} from 'react-native';
import Header from '../../../../SharedModule/Header/Header';
import Select2 from 'react-native-select-two';
import {Tab, Tabs, TabHeading} from 'native-base';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {stylesCostLitigation} from './styleJudicialcalculations';

const mockData = [
        {id: 1, name: 'بدوی'},
        {id: 2, name: 'واخواهی'},
        {id: 3, name: 'تجدید نظر'},
        {id: 4, name: 'اعاده دادرسی'},
        {id: 5, name: ' فرجام خوا'},
        {id: 6, name: 'اعتراض  ثالث'},
    ],
    mock = [
        {id: 1, name: 'مربوط به امئال غیر منقول'},
        {id: 2, name: 'مربوط به امور تجاری و شرکت ها'},
        {id: 3, name: 'مربوط به اسناد سجلی'},
        {id: 4, name: 'امور حسبی'},
        {id: 5, name: ' موضوع صلاحیت دادگاه خانواده و دستور موقت و تامین خواسته مربوطه به آن'},
        {id: 6, name: 'تامین خواسته و دستور موقت'},
    ];
export default class CostLitigation extends React.Component {
    constructor() {
        super();

        this.state = {};
    }


    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#333'}
                           barStyle="light-content"/>
                <Header title="هزینه دادرسی" onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>


                <Tabs tabBarUnderlineStyle={{backgroundColor: '#067062', height: 4}} initialPage={3}>

                    <Tab
                        heading={<TabHeading style={{backgroundColor: '#fff'}}>
                            <Text style={{color: '#067062', fontFamily: 'Vazir-Black'}}>سایر</Text>
                        </TabHeading>}>
                        <View style={{flex: 1, backgroundColor: '#DCDCDC'}}>
                            <Card style={stylesCostLitigation.cardStyle}>


                            </Card>
                            <View style={{flex: 1, marginTop: 10}}>


                            </View>
                        </View>
                    </Tab>

                    <Tab
                        heading={<TabHeading style={{backgroundColor: '#fff'}}>
                            <Text style={{color: '#067062', fontFamily: 'Vazir-Black'}}>چک کیفری</Text>


                        </TabHeading>}>
                        <View style={{flex: 1, backgroundColor: '#fff'}}>
                            <Card style={[stylesCostLitigation.card]}>
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
                                    }}> مبلغ به چک را وارد کنید
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

                                    <View style={stylesCostLitigation.inputContainer}>
                                        <Text style={{marginLeft: 5}}> ریال</Text>
                                        <TextInput style={stylesCostLitigation.inputs}

                                                   keyboardType='number-pad'
                                                   underlineColorAndroid='transparent'
                                                   onChangeText={(email) => this.setState({email})}/>
                                    </View>
                                    <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>مبلغ چک </Text>


                                </View>
                            </Card>


                        </View>
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
                            <Text style={{color: '#067062', fontFamily: 'Vazir-Black'}}>غیرمالی</Text>

                        </TabHeading>}>
                        <View style={{flex: 1, backgroundColor: '#fff'}}>
                            <Card style={[stylesCostLitigation.card]}>
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
                                        مقطع یا مرحله را انتخاب کنید
                                    </Text>
                                </View>
                                <View style={{
                                    backgroundColor: '#fff',
                                    flexDirection: 'row-reverse',
                                    alignSelf: 'center',
                                    borderRadius: 10,
                                    shadowOpacity: 0.9,
                                    marginTop: 15,
                                }}>
                                    <Icon
                                        style={{
                                            alignItems: 'center',
                                            marginBottom: 5,
                                            marginRight: 10,
                                            alignSelf: 'center',
                                        }}
                                        name='sort-down'
                                        color='#067062'
                                        size={20}/>
                                    <Select2
                                        isSelectSingle
                                        style={{
                                            backgroundColor: '#fff',
                                            height: 40,
                                            width: '88%',
                                            alignSelf: 'center',
                                            marginRight: 5,
                                            borderRadius: 10,
                                            shadowOpacity: 0.9,
                                            shadowRadius: 7.49,
                                            elevation: 12,

                                        }}
                                        colorTheme="#067062"
                                        popupTitle="نوع دعوا"
                                        cancelButtonText='انصراف'
                                        selectButtonText='تایید'
                                        searchPlaceHolderText='جستجو'
                                        title="مقطع یا مرحله"

                                        data={mockData}
                                        onSelect={data => {
                                            this.setState({data});
                                        }}
                                        onRemoveItem={data => {
                                            this.setState({data});
                                        }}
                                    />

                                </View>


                            </Card>
                            <Card style={[stylesCostLitigation.card]}>
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
                                        نوع دعوای مالی را انتخاب کنید
                                    </Text>
                                </View>
                                <View style={{
                                    backgroundColor: '#fff',
                                    flexDirection: 'row-reverse',
                                    alignSelf: 'center',
                                    borderRadius: 10,
                                    shadowOpacity: 0.9,
                                    marginTop: 15,
                                }}>
                                    <Icon
                                        style={{
                                            alignItems: 'center',
                                            marginBottom: 5,
                                            marginRight: 10,
                                            alignSelf: 'center',
                                        }}
                                        name='sort-down'
                                        color='#067062'
                                        size={20}/>
                                    <Select2
                                        isSelectSingle
                                        style={{
                                            backgroundColor: '#fff',
                                            height: 40,
                                            width: '88%',
                                            alignSelf: 'center',
                                            marginRight: 5,
                                            borderRadius: 10,
                                            shadowOpacity: 0.9,
                                            shadowRadius: 7.49,
                                            elevation: 12,

                                        }}
                                        colorTheme="#067062"
                                        popupTitle="نوع دعوا"
                                        cancelButtonText='انصراف'
                                        selectButtonText='تایید'
                                        searchPlaceHolderText='جستجو'
                                        title="نوع دعوای مالی"

                                        data={mock}
                                        onSelect={data => {
                                            this.setState({data});
                                        }}
                                        onRemoveItem={data => {
                                            this.setState({data});
                                        }}
                                    />

                                </View>


                            </Card>

                        </View>
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
                    <Tab heading={<TabHeading style={{backgroundColor: '#fff'}}>
                        <Text style={{color: '#067062', fontFamily: 'Vazir-Black'}}>مالی</Text>
                    </TabHeading>}>
                        <View style={{flex: 1, backgroundColor: '#fff'}}>
                            <Card style={[stylesCostLitigation.card]}>
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
                                        مقطع یا مرحله را انتخاب کنید
                                    </Text>
                                </View>
                                <View style={{
                                    backgroundColor: '#fff',
                                    flexDirection: 'row-reverse',
                                    alignSelf: 'center',
                                    borderRadius: 10,
                                    shadowOpacity: 0.9,
                                    marginTop: 15,
                                }}>
                                    <Text style={{
                                        color: '#555',
                                        fontFamily: 'Vazir-Black',
                                        marginRight: 5,
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        justifyContent: 'flex-end',
                                    }}> مقطع یا مرحله</Text>
                                    <Icon
                                        style={{
                                            alignItems: 'center',
                                            marginBottom: 5,
                                            marginRight: 10,
                                            alignSelf: 'center',
                                        }}
                                        name='sort-down'
                                        color='#067062'
                                        size={20}/>
                                    <Select2
                                        isSelectSingle
                                        style={{
                                            backgroundColor: '#fff',
                                            height: 40,
                                            width: '57%',
                                            alignSelf: 'center',
                                            marginRight: 5,
                                            borderRadius: 10,
                                            shadowOpacity: 0.9,
                                            shadowRadius: 7.49,
                                            elevation: 12,
                                        }}
                                        colorTheme="#067062"
                                        popupTitle="نوع دعوا"
                                        cancelButtonText='انصراف'
                                        selectButtonText='تایید'
                                        searchPlaceHolderText='جستجو'
                                        title="مقطع یا مرحله"

                                        data={mockData}
                                        onSelect={data => {
                                            this.setState({data});
                                        }}
                                        onRemoveItem={data => {
                                            this.setState({data});
                                        }}
                                    />

                                </View>


                            </Card>
                            <Card style={{
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

                                    <View style={stylesCostLitigation.inputContainer}>
                                        <Text style={{marginLeft: 5}}> ریال</Text>
                                        <TextInput style={stylesCostLitigation.inputs}

                                                   keyboardType='number-pad'
                                                   underlineColorAndroid='transparent'
                                                   onChangeText={(email) => this.setState({email})}/>
                                    </View>
                                    <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>بهای خواسته یا محکوم
                                        به</Text>


                                </View>
                            </Card>


                        </View>
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


