import React from 'react';
import {

    Text,
    View,

    FlatList, Image, TouchableOpacity, StatusBar,
} from 'react-native';
import Header from '../../../../SharedModule/Header/Header';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-navigation';
import {stylesForms} from './styleForms';

export default class FormLawe extends React.Component {
    constructor() {
        super();

        this.state = {


            Daydata: [
                {
                    id: 1,


                    title: 'اظهارنامه',

                }
                ,
                {
                    id: 2,
                    title: 'دادخواست ها',

                }
                , {
                    id: 4,
                    title: 'قراردادها',

                }

                , {
                    id: 5,
                    title: 'نمونه درخواست ها',

                }
                , {
                    id: 6,
                    title: 'نمونه فرم ها',
                },

            ],
        };
    }

    clickEventListener(item) {
        if (item.id == 1) {
            this.props.navigation.navigate('declaration');

        } else if (item.id == 2) {
            this.props.navigation.navigate('petition');
        } else if (item.id == 3) {
            this.props.navigation.navigate('laws');
        } else if (item.id == 4) {
            this.props.navigation.navigate('salary');
        } else if (item.id == 5) {
            this.props.navigation.navigate('formlawe');
        } else if (item.id == 6) {
            this.props.navigation.navigate('salaryLaw');
        }

    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#333'}
                           barStyle="light-content"/>
                <Header title="فرم های حقوقی" onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>

                <Image style={stylesForms.cardImage} source={require('../../../../../assets/image/11.jpg')}/>


                <View style={{flex: 1, marginTop: 2}}>
                    <FlatList style={{marginTop: 25}} enableEmptySections={true}
                              numColumns={1}
                              data={this.state.Daydata}
                              keyExtractor={(item) => {
                                  return item.id;
                              }}
                              renderItem={({item}) => {
                                  return (

                                      <Card style={stylesForms.cc} key={0}>
                                          <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                              <View style={{marginRight: 8}}>
                                                  <Image
                                                      style={{width: 35, height: 35, marginTop: 12}}
                                                      source={require('../../../../../assets/image/fo.png')}></Image>
                                              </View>
                                              <View style={stylesForms.v1}>
                                                  <Text style={stylesForms.t1}>{item.title}</Text>


                                              </View>


                                              <TouchableOpacity style={stylesForms.v2} onPress={() => {
                                                  this.clickEventListener(item);
                                              }}>
                                                  <Icon
                                                      name="angle-left"
                                                      color='#fff'
                                                      style={{fontSize: 30, marginRight: 5, marginBottom: 2}}
                                                  />
                                              </TouchableOpacity>


                                          </View>

                                      </Card>

                                  );
                              }}/>
                </View>

            </SafeAreaView>
        );
    }
}

