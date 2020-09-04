import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Header from '../../../../SharedModule/Header/Header';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-navigation';
import {stylesSetOfRules} from './style';

export default class SetOfRules extends React.Component {
  constructor() {
    super();

    this.state = {
      dataSource: [],
    };
    this.ShowCategory();
  }

  //   ..............Show...................

  ShowCategory = () => {
    fetch('http://194.5.175.25:3131/api/v1/category')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  clickEventListener(item) {
    let id=item._id
    if (item._id === id) {
      this.props.navigation.navigate('DetailLaws');
    }

}

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar
          hidden={false}
          translucent={true}
          networkActivityIndicatorVisible={true}
          backgroundColor={'#333'}
          barStyle="light-content"
        />
        <Header
          title="مجوعه قوانین"
          onBackPress={() => {
            this.props.navigation.goBack();
          }}
        />

        <View style={{flex: 1, marginTop: 2}}>
          <FlatList
            style={{marginTop: 25}}
            enableEmptySections={true}
            numColumns={1}
            data={this.state.dataSource}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={({item}) => {
              return (
                <Card style={stylesSetOfRules.card} key={0}>
                  <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                    <View style={{marginRight: 8}}>
                      <Image
                        style={{width: 30, height: 30, marginTop: 15}}
                        source={require('../../../../../assets/image/m8.png')}></Image>
                    </View>
                    <View style={stylesSetOfRules.cardText}>
                      <Text style={stylesSetOfRules.categoryText}>{item.text}</Text>
                    </View>

                    <TouchableOpacity
                      style={stylesSetOfRules.buttonLeft}
                      onPress={() => {
                        this.clickEventListener(item);
                      }}>
                      <Icon
                        name="angle-left"
                        color="#fff"
                        style={{fontSize: 30, marginRight: 5, marginBottom: 2}}
                      />
                    </TouchableOpacity>
                  </View>
                </Card>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

