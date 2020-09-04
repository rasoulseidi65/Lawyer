import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    ImageBackground, StatusBar,
} from 'react-native';
import Header from '../../../../SharedModule/Header/Header';
import {Divider} from 'react-native-paper';
import {Card} from 'native-base';
import {stylesNews} from './style';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            userSelected: [],
            data: [
                {
                    id: 1,
                    title: 'ابراز تأسف رئیسی از بلاتکلیفی هیئت‌مدیره ماشین‌سازی تبریز به خاطر اختلاف دولتی‌ها/در استان‌های قرمز ماسک رایگان بدهید',
                    dat: '2/5/99',
                    clock: '3:15:20',
                    color: '#067062',
                    colort: '#fff',
                    colorb: '#fff',
                    colorm: '#067062',
                    image: require('../../../../../assets/image/87.jpg'),
                },
                {
                    id: 2,
                    title: 'روح‌الله زم به حکم اعدام خود اعتراض کرد',
                    dat: '15/1/99',
                    clock: '20:45:1',
                    color: '#fff',
                    colort: '#067062',
                    colorb: '#067062',
                    image: require('../../../../../assets/image/11.jpg'),
                },
                {
                    id: 3,
                    title: 'کانون سردفتران در جوابیه خود سعی در پوشاندن چه حقایقی دارد؟',
                    dat: '8/1/99',
                    clock: '21:25:20',
                    color: '#fff',
                    colort: '#067062',
                    colorb: '#067062',
                    image: require('../../../../../assets/image/29.jpg'),
                },
                {
                    id: 4,
                    title: 'برگزاری انتخابات شورایاری محلات شهر تهران برای دوره‌های بعدی مغایر قانون شناخته شد',
                    dat: '28/5/99',
                    clock: '12:20:20',
                    color: '#067062',
                    colort: '#fff',
                    colorb: '#fff',
                    colorm: '#067062',
                    image: require('../../../../../assets/image/1.jpg'),
                },
                {
                    id: 5,
                    title: 'جزئیات اختصاص ۵۰ میلیارد برای آزادی ۲۵۷۴ زندانی جرائم غیرعمد توسط بنیاد مستضعفان',
                    dat: '30/3/99',
                    clock: '08:30:20',
                    color: '#067062',
                    colort: '#fff',
                    colorb: '#fff',
                    colorm: '#067062',
                    image: require('../../../../../assets/image/8.jpg'),
                },
                {
                    id: 6,
                    title: 'وزیر دادگستری شهریور ۹۷: ارسال بسته اصلاح قانون اختیارات تعزیرات به مجلس/نوروزی تیر ۹۹: بی‌خبریم!',
                    dat: '19/4/99',
                    clock: '10:15:20',
                    color: '#fff',
                    colort: '#067062',
                    colorb: '#067062',
                    image: require('../../../../../assets/image/13.jpg'),
                },
                {
                    id: 7,
                    title: 'استفاده از ظرفیتهای قوه قضاییه و شهرداری تهران برای فرهنگسازی در حوزه حمل‌و‌نقل',
                    dat: '1/2/99',
                    clock: '11:45:20',
                    color: '#fff',
                    colort: '#097092',
                    colorb: '#067062',
                    image: require('../../../../../assets/image/12.jpg'),
                },
                {
                    id: 8,
                    title: 'استفاده از ظرفیتهای قوه قضاییه و شهرداری تهران برای فرهنگسازی در حوزه حمل‌و‌نقل',
                    dat: '16/3/99',
                    clock: '17:17:17',
                    color: '#067062',
                    colort: '#fff',
                    colorb: '#fff',
                    colorm: '#067062',
                    image: require('../../../../../assets/image/4.jpg'),
                },
                {
                    id: 9,
                    title: 'آزادی ۱۴۰ زندانی غیرعمد در دهه کرامت',
                    dat: '1/5/99',
                    clock: '13:01:20',
                    color: '#067062',
                    colort: '#fff',
                    colorb: '#fff',
                    colorm: '#067062',
                    image: require('../../../../../assets/image/14.jpg'),
                },
                {
                    id: 10,
                    title: '  کند که حتماً قانون در این خصوص وضع شده باشد',
                    dat: '27/4/99',
                    clock: '09:25:18',
                    color: '#fff',
                    colort: '#067062',
                    colorb: '#067062',
                    image: require('../../../../../assets/image/15.jpg'),
                },
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
            <View style={stylesNews.container}>
                <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#333'}
                           barStyle="light-content"/>
                <Header title="پایگاه خبری" onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>
                <FlatList
                    style={stylesNews.userList}
                    columnWrapperStyle={stylesNews.listContainer}
                    numColumns={2}
                    data={this.state.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => {
                        return (
                            <Card style={[stylesNews.box]}>
                                <View style={{}}>
                                    <ImageBackground style={[stylesNews.image, {backgroundColor: item.color}]}
                                                     source={item.image} opacity={0.3}>


                                        <Text style={[stylesNews.name1, {color: item.colort}]}>{item.title}</Text>

                                        <View style={{
                                            flex: 1,
                                            justifyContent: 'flex-start',
                                            alignSelf: 'flex-start',
                                            marginLeft: 20,
                                        }}>
                                            <Text style={[stylesNews.name2, {color: item.colort}]}>{item.dat}</Text>
                                            <Divider
                                                style={{width: 80, height: 2, backgroundColor: 'gray'}}
                                            />
                                            <Text style={[stylesNews.name5, {color: item.colort}]}>{item.clock}</Text>
                                        </View>
                                        <View style={stylesNews.row}>
                                            <TouchableOpacity
                                                style={[stylesNews.buttonContainer, {backgroundColor: item.colorb}]}
                                                onPress={() => this.props.navigation.navigate('det')}>
                                                <Text style={[stylesNews.buttonText, {color: item.color}]}>مشاهده خبر</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </ImageBackground>

                                </View>
                            </Card>
                        );
                    }}/>
            </View>
        );
    }
}
