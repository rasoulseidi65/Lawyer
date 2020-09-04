import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,Linking,
} from 'react-native';
// import { WebView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Communications from 'react-native-communications';

//................icons....................................

export default class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
        messege: 'من از اپلیکیشن وکیل شما را  استفاده میکنم. به شما هم پیشنهاد میکنم...  https://cafebazaar.ir/app/com.web24.didebanhashtom/?l=fa' 
      
    };
    
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
          translucent={true}
          networkActivityIndicatorVisible={true}
          backgroundColor={'#0078db'}
          barStyle="light-content"
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}
          onPress={() => this.props.navigation.goBack(null)}>
          <View style={{flexDirection: 'row', marginLeft: 10}}></View>

          <View style={{marginRight: 15}}>
            <Icon name="arrow-right" color="#fff" size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.v}  onPress={() => {
            Linking.openURL(
              'http://api.whatsapp.com/send?phone=98' + this.state.messege
            );
          }}>
          <Icon name="share-alt" color="#067062" size={55} />
        </TouchableOpacity>
        <Text style={styles.txt}>اشتراک گذاری</Text>
        <ScrollView>
        {/* <WebView
            style={{flex: 1, backgroundColor: 'white'}}
            source={{
              uri: 'http://www.africau.edu/images/default/sample.pdf',
            }}
            bounces={true}
            useWebKit={true}
            scrollEnabled={true}
          /> */}
          <View style={styles.card1}>
            <Text style={styles.txt2}>
              ما بر آنیم تا با ارائه این برنامه گامی در جهت سهولت دسترسی جامعه
              حقوقی از جمله وکلا قضات ٬ سردفتران و دانشجویان به منابع حقوقی کشور
              برداریم.
            </Text>
            <Text style={styles.txt1}>
              ما را به دوستان و آشنایان خود معرفی کنید
            </Text>
            <View style={styles.viewicon}>
            <TouchableOpacity onPress={() => {
            Linking.openURL(
              'http://api.whatsapp.com/send?text=' + this.state.messege
            );
          }}>
              <Icon
                name="whatsapp"
                color="#067062"
                size={50}
                style={styles.icon}
              />
              </TouchableOpacity>
              <TouchableOpacity >
              <Icon
                name="envelope-o"
                color="#067062"
                size={50}
                style={styles.icon}
              />
              </TouchableOpacity>
              <Icon
                name="instagram"
                color="#067062"
                size={50}
                style={styles.icon}
              />
              <Icon
                name="send-o"
                color="#067062"
                size={50}
                style={styles.icon}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#067062',
  },

  vakil: {
    color: '#067062',
    marginTop: -40,
    fontSize: 20,
    fontFamily: 'Lalezar-Regular',
  },
  // ...........کارد اصلی...........

  card1: {
    width: '100%',
    marginTop: 20,
    alignSelf: 'center',
    height: windowHeight - 120,

    shadowColor: '#3d933c',
    backgroundColor: '#fff',

    shadowOffset: {
      width: 0,
      height: 2,
      marginRight: 16,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
  icon: {
    marginLeft: 20,
  },
  txt1: {
    color: '#333',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 90,
    fontSize: 20,
    fontFamily: 'Vazir-Black',
  },
  txt2: {
    color: '#555',
    marginHorizontal: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 60,
    fontSize: 16,
    fontFamily: 'Vazir-Black',
  },
  viewicon: {
    flexDirection: 'row-reverse',
    marginTop: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },

  view: {
    backgroundColor: '#fff',
    height: 50,
    width: '75%',
    alignSelf: 'center',
    borderRadius: 10,
    shadowOpacity: 0.9,
    shadowRadius: 7.49,
    marginTop: 45,
    elevation: 12,
    backgroundColor: 'white',
  },
  txt: {
    color: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 18,
    fontFamily: 'Vazir-Black',
  },

  v: {
    backgroundColor: '#fff',
    height: 112,
    width: 112,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 100,
    shadowOpacity: 0.9,
    shadowRadius: 7.49,
    elevation: 12,
    backgroundColor: 'white',
  },
  vakil: {
    color: '#067062',
    marginTop: -40,
    fontSize: 16,
    fontFamily: 'Lalezar-Regular',
  },
});
