import React from 'react';
import {
    StyleSheet,
    Text,
    View,

    ScrollView, FlatList, Image, TouchableOpacity, StatusBar,
} from 'react-native';

import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-navigation';
import Header from '../../../../SharedModule/Header/Header';
import {stylesJudicialCenters} from './style';

export default class Location extends React.Component {

    constructor() {
        super();

        this.state = {


            Daydata: [
                {
                    id: 1,


                    title: 'دادگاه های خانواده',

                }
                ,
                {
                    id: 2,
                    title: 'دادگاه های کیفری',


                }
                , {
                    id: 4,
                    title: 'نظریات مشورتی 1394',


                }

                , {
                    id: 5,
                    title: 'دادگاه های حقوقی',


                }
                , {
                    id: 6,
                    title: 'دادسرا های عمومی و انقلاب',


                }
                , {
                    id: 7,
                    title: 'مراکز پلیس',


                }
                , {
                    id: 8,
                    title: 'دفاتر اسناد رسمی',


                }
                , {
                    id: 9,
                    title: 'دفاتر خدمات الکترونیک قضائی',


                },


            ],
        };
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#333'}
                           barStyle="light-content"/>
                <Header title="مراکز قضایی " onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>


                <View style={{flex: 1, marginTop: 2}}>
                    <FlatList style={{marginTop: 25}} enableEmptySections={true}
                              numColumns={1}
                              data={this.state.Daydata}
                              keyExtractor={(item) => {
                                  return item.id;
                              }}
                              renderItem={({item}) => {
                                  return (
                                      <Card style={stylesJudicialCenters.cc} key={0}>
                                          <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                              <View style={{marginRight: 12}}>
                                                  <Image
                                                      style={{width: 40, height: 40, marginTop: 8}}
                                                      source={require('../../../../../assets/image/m3.png')}></Image>
                                              </View>
                                              <View style={stylesJudicialCenters.v1}>
                                                  <Text style={stylesJudicialCenters.t1}>{item.title}</Text>


                                              </View>

                                              <View style={stylesJudicialCenters.v2}>

                                                  <TouchableOpacity
                                                      onPress={() => this.props.navigation.navigate('det')}>
                                                      <Icon
                                                          name="angle-left"
                                                          color='#fff'
                                                          style={{fontSize: 30, marginRight: 5, marginBottom: 2}}
                                                      />
                                                  </TouchableOpacity>

                                              </View>
                                          </View>

                                      </Card>

                                  );
                              }}/>
                </View>

            </SafeAreaView>
        );
    }
}


