import React from 'react';
import {
    StyleSheet,
    Text,
    View,

    ScrollView, FlatList, Image, TouchableOpacity, StatusBar
} from 'react-native';
import Header from '../../../../SharedModule/Header/Header';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-navigation';
import {stylesDetailSetOfRules} from './style';

export default class Lawes extends React.Component {

    constructor() {
        super();

        this.state = {
            dataSource:[],


        };
        this.ShowSubcategory();
  }

 ShowSubcategory = ( categoryID) => {
    fetch('http://194.5.175.25:3131/api/v1/subcategory', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       categoryID:'5f3bbca382cf041e74fa207c'

        })

    }).then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson.data
              })

        }).catch((error) => {
            console.error(error);
        });
}
 //   ..............Show...................






    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>


            <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                   backgroundColor={'#333'}
                   barStyle="light-content" />
          <Header title="زیردسته " onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>

                <View style={{ flex: 1, marginTop: 2 }}>
                    <FlatList style={{ marginTop: 25 }} enableEmptySections={true}
                        numColumns={1}
                        data={this.state.dataSource}
                              keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (

                                <Card style={stylesDetailSetOfRules.card} key={0}>
                                    <View style={{ flex: 1, flexDirection: 'row-reverse', }}>
                                        <View style={{ marginRight: 8 }}>
                                            <Image
                                                style={{ width: 30, height: 30, marginTop: 15 }}
                                                source={require('../../../../../assets/image/m8.png')}></Image>
                                        </View>
                                        <View style={stylesDetailSetOfRules.cardText}>
                                            <Text style={stylesDetailSetOfRules.subCategoryText}>{item.text}</Text>


                                        </View>


                                            <TouchableOpacity style={stylesDetailSetOfRules.buttonLeft} onPress={() => { this.clickEventListener(item) }}>
                                                <Icon
                                                    name="angle-left"
                                                    color='#fff'
                                                    style={{ fontSize: 30, marginRight: 5, marginBottom: 2 }}
                                                />
                                            </TouchableOpacity>


                                    </View>

                                </Card>

                            )
                        }} />
                </View>

            </SafeAreaView>
        );
    }
}


