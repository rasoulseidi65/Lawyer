import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity, StatusBar,
} from 'react-native';
import Header from '../../../../SharedModule/Header/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Select2 from 'react-native-select-two';
import {Button} from 'react-native-elements';

const mockData = [
    {id: 1, name: 'کارشناس ارزیاب (قیمت گذاری)'},
    {id: 2, name: 'کارشناس ثبتی '},
    {id: 3, name: 'کارشناس حسابداری و حسابرسی'},
    {id: 4, name: 'کارشناس آب'},
    {id: 4, name: 'کارشناسی سایر'},
];

export default class salary extends Component {


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#333'}
                           barStyle="light-content"/>
                <Header title="دستمزد کارشناس" onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>
                <View style={{
                    backgroundColor: '#fff',
                    height: 100,
                    width: '95%',
                    flexDirection: 'row-reverse',
                    alignSelf: 'center',
                    borderRadius: 10,
                    shadowOpacity: 0.9,
                    shadowRadius: 7.49,
                    elevation: 12,

                    marginTop: 20,
                }}>
                    <Text style={{
                        color: '#067062',
                        fontFamily: 'Vazir-Black',
                        marginRight: 15,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'flex-end',
                    }}>نوع کارشناسی :</Text>
                    <Icon
                        style={{alignItems: 'center', marginBottom: 5, marginRight: 10, alignSelf: 'center'}}
                        name='sort-down'
                        color='#067062'
                        size={20}/>
                    <Select2
                        isSelectSingle
                        style={{
                            backgroundColor: '#fff',
                            height: 40,
                            width: '50%',
                            alignSelf: 'center',
                            marginRight: 20,
                            borderRadius: 10,
                            shadowOpacity: 0.9,
                            shadowRadius: 7.49,
                            elevation: 12,
                        }}
                        colorTheme="#067062"
                        popupTitle="نوع کارشناسی"
                        cancelButtonText='انصراف'
                        selectButtonText='تایید'
                        searchPlaceHolderText='جستجو'
                        title=""
                        data={mockData}
                        onSelect={data => {
                            this.setState({data});
                        }}
                        onRemoveItem={data => {
                            this.setState({data});
                        }}
                    />
                </View>
                <View style={{
                    backgroundColor: '#fff', height: 110, width: '95%', alignSelf: 'center', shadowOpacity: 0.9,
                    shadowRadius: 7.55,
                    elevation: 15,
                   marginTop: 40, borderRadius: 10,
                }}>
                    <TextInput
                        style={{
                            alignItems: 'flex-start',
                            fontSize: 15,
                            marginLeft: 10,
                            fontFamily: 'Vazir-Black',
                            color: '#555',
                            justifyContent: 'flex-end',
                            marginRight: 20,
                        }}
                        placeholder="مبلغ مورد ارزیابی (ریال)"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <Button buttonStyle={{
                    marginHorizontal: 20, marginVertical: 20, backgroundColor: '#067062', borderRadius: 10,
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});
