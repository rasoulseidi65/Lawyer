import React, { Component } from 'react';
import { View, Text,TouchableOpacity ,StatusBar,Image,ScrollView,StyleSheet,Share} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Footer,} from "native-base";
import {createDrawerNavigator, DrawerItems,DrawerActions} from 'react-navigation-drawer';

export default class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inputValue: '',
    };
  }
  ShareMessage = () => {
    //Here is the Share API
    Share.share({
      message: this.state.inputValue.toString(),
    })
    //after successful share return result
    .then(result => console.log(result))
    //If any thing goes wrong it comes here
    .catch(errorMsg => console.log(errorMsg));
  };
  render() {
    return (
        <View style={{flex: 1, backgroundColor: '#067062',}}>


           <View style={{ justifyContent:
           'center',alignItems:'center',marginBottom:20
           }}>

               <Image
                   style={{width: 90, height: 90, borderRadius: 100,marginTop:10,borderColor:'#fff',borderWidth:2}}
                   source={require('../../../assets/image/tt.png')}
               />
             <Text style={{marginTop:5,color:'#fff',fontSize:16,fontFamily: 'Vazir-Black',alignSelf:'center'}}> تارا نظری</Text>
           </View>



       <View style={{backgroundColor:'#fff',flex:2,borderTopLeftRadius:50}}>

       <ScrollView >
       <DrawerItems {...props} />
            {/* <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>this.props.navigation.navigate('home')}>

                       <Text style={styles.text}>صفحه اصلی</Text>


                       <Icon name='home' size={20} style={styles.icon}/>

            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacity}>
                       <Text style={styles.text}>پروفایل کاربری</Text>

                       <Icon name='user-tie' size={20} style={styles.icon}/>

            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacity}>
                       <Text style={styles.text}>تنظیمات</Text>

                       <Icon name='user-cog' size={20} style={styles.icon}/>

            </TouchableOpacity> */}
            <TouchableOpacity style={[styles.TouchableOpacity,{marginRight:12}]} onPress={this.ShareMessage}
          activeOpacity={1}>
                       <Text style={styles.text}>اشتراک گذاری</Text>

                       <Icon name='share-alt' size={20} style={styles.icon}/>
                 </TouchableOpacity>

              </ScrollView>

              <Footer style={styles.containerfooter}>
          <View style={{flexDirection: 'row-reverse', flex: 1,paddingHorizontal:10}}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end',marginHorizontal:20}}>
                  <Icon color={'#067062'} name='sign-out-alt' size={20} style={styles.containericon}/>
              </View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Text style={{color: '#067062', fontFamily:'Vazir-Black'}}>خروج</Text>
              </View>
          </View>
      </Footer>
       </View>

   </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        height: 180,
        backgroundColor: '#067062',
        alignItems: 'center',
        justifyContent: 'center',
    },
   TouchableOpacity: {
    flexDirection:'row',marginTop:20,justifyContent:'flex-end',marginRight:10
    },
    containerfooter: {
        backgroundColor: '#fff',
      //  borderTopColor: '#eeeeee',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
   text: {
    fontFamily:'Vazir-Black', color: '#067062',textAlign:'right',marginRight:20
    },
    icon: {
        color: '#067062',marginLeft:8

    },
});
