import React, {Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  
} from 'react-native';
import {Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
 
export default class App extends Component {
    render() {
        return(
            <View style={[styles.v, {backgroundColor: '#fff'}]}>
         <Card style={[styles.card, {width:380,height:370,marginLeft:15,backgroundColor:'#067062',marginTop:15}]}>
         <View style={{backgroundColor:'#fff',height:150,width:150,alignItems:'center',justifyContent:'center',marginLeft:105,marginTop:95,borderTopLeftRadius:100,borderBottomLeftRadius:100,borderBottomRightRadius:100,borderTopRightRadius:100,shadowOpacity: 0.9,
shadowRadius: 7.49,
elevation: 12,
backgroundColor: 'white',borderRadius: 10}}> 
            
            <Image
          style={{width: 140, height: 140}}
          source={require('../image/ss1.png')}
       />
       <Text 
         style={{color:'#067062',marginTop:-40,fontSize:20,fontFamily:"Lalezar-Regular"
        }}
         >
             وکیل شما</Text>
         </View>
         </Card>
       <View style={[styles.v, {backgroundColor: '#fff',marginTop:20,flex:1}]}>
       <View>
       <Card style={[styles.card, {width:380,height:350,marginLeft:18}]}>
       <View style={{backgroundColor:'#e2e2e2',height:50,width:340,alignSelf:'center',marginTop:30,borderTopLeftRadius:70,borderBottomRightRadius:70,borderTopRightRadius:70,borderBottomLeftRadius:70}}>
       <TextInput
        style={{alignItems:'flex-start',justifyContent:'flex-end',marginRight:20}}
        placeholder="رمزعبور قدیمی"
        underlineColorAndroid="transparent"
        />
       </View>
       <View style={{backgroundColor:'#e2e2e2',height:50,width:340,alignSelf:'center',marginTop:25,borderTopLeftRadius:70,borderBottomRightRadius:70,borderTopRightRadius:70,borderBottomLeftRadius:70}}>
       <TextInput
        style={{alignItems:'flex-start',justifyContent:'flex-end',marginRight:20}}
        placeholder="رمزعبورجدید"
        underlineColorAndroid="transparent"
        />
       </View>
       <View style={{backgroundColor:'#e2e2e2',height:50,width:340,alignSelf:'center',marginTop:25,borderTopLeftRadius:70,borderBottomRightRadius:70,borderTopRightRadius:70,borderBottomLeftRadius:70}}>
       <TextInput
        style={{alignItems:'flex-start',justifyContent:'flex-end',marginRight:20}}
        placeholder="تایید رمزعبور"
        underlineColorAndroid="transparent"
        />
       </View>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('si')}>
       <View style={{backgroundColor:'#067062',height:50,width:340,alignSelf:'center',marginTop:25,borderTopLeftRadius:70,borderBottomRightRadius:70,borderTopRightRadius:70,borderBottomLeftRadius:70}}>
        <Text style={[styles.txt,{color:'#fff',fontSize:18,fontFamily:"IRANSansMobile_Bold",alignSelf:'center',justifyContent:'center',marginTop:5}]}>
          اکنون ذخیره شود!
          </Text>
        </View>
        </TouchableOpacity>
       </Card>
       </View>
         </View>
         </View>
         
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      // marginTop: 100,
    },
    v: {
  flex: 1,
  justifyContent: 'center',
    },
  
    txt: {
  flex:1,
    },
   
    card: {
      
          marginBottom: 50,
          shadowColor: '#00000040',
          flexDirection: 'row',
          shadowOffset: {
            width: 20,
            height: 5,
          },
      shadowOpacity: 0.9,
      shadowRadius: 7.49,
      elevation: 12,
      marginVertical: 2,
      marginHorizontal: 6,
      backgroundColor: 'white',
      // flexBasis: '100%',
      padding: 5,
      flexDirection: 'row',
      borderRadius: 10,
    },
  
  
    textstyle:{
      fontSize:20,
      color:'#000',
      textAlign:'center',
      marginBottom: 18
    },
    InputStyle:{
        height:40,
        width:400,
        marginTop:5,
        marginLeft:15,
        // borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        // borderColor:'#2196F3',
        // borderRadius:5
      },
  });
  