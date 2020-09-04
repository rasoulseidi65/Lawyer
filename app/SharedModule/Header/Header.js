import React, {Component} from 'react';
import {View} from "react-native";
import {Switch, Appbar} from 'react-native-paper';
export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Appbar.Header  style={{backgroundColor:'#067062',marginTop:23}}>
                    <Appbar.Content
                        titleStyle={{
                            color: '#fff',
                            fontFamily: 'Vazir-Black',
                            fontSize: 18,
                            textAlign:'center',
                        }}
                        title={this.props.title}/>
                        <Appbar.Action  style={{   }} color={'#fff'} size={30} icon={'arrow-right-circle'}  onPress={this.props.onBackPress} />
                </Appbar.Header>
            </View>

        );
    }
  }
// }
// import React, { Component } from "react";
// import { StyleSheet , StatusBar} from 'react-native'
// import {
//   Container,
//   Header,
//   Title,
//   Content,
//   Button,
//   Left,
//   Right,
//   Body,
//   Text,
//   View,
 
// } from "native-base";

// import Icon from 'react-native-vector-icons/FontAwesome';
// class Header2 extends Component {
//   render() {
//     return (
//         <View >
         
// <Header style={{backgroundColor:'#067062',marginTop:20}} >
//         <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
//                    backgroundColor={'#555'}
//                    barStyle="dark-light" />


// <Right>
//   <Body>
//   <Title style={{fontFamily:'Vazir-Black',fontSize:16,textAlign:'center',alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:10}}>{this.props.title}</Title>

//   </Body>

// <Button transparent onPress={this.props.onBackPress}>
//     <Icon name="arrow-right" style={{color:'#fff',fontSize:20}} />
//   </Button>
// </Right>
// </Header>
// </View>
//  );
// }
// }

// const styles = StyleSheet.create({
//     container: {
//       backgroundColor: "#FFF"
//     }
//   });
  
  //export default Header2;