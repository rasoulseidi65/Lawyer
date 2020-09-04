import React, {Component} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Header1 from '../../../../SharedModule/Header/Header';
import Fab from 'rn-fab';
import Icon from 'react-native-vector-icons/FontAwesome';
const actions = [
    // main button
    {
        icon:   <Icon
            name="angle-left"
            color='#fff'
            style={{fontSize: 30, marginRight: 5, marginBottom: 2}}
        />,
        name: "btn_plus",
        color: '#2a57c6'
    },
    // action buttons - will be displayed when you tap the main button.
    {
        text: "Details",
        icon:   <Icon
            name="angle-left"
            color='#fff'
            style={{fontSize: 30, marginRight: 5, marginBottom: 2}}
        />,
        name: "btn_detail",
        color: '#ee4343'
    },
    {
        text: "Favorites",
        icon:   <Icon
            name="angle-left"
            color='#fff'
            style={{fontSize: 30, marginRight: 5, marginBottom: 2}}
        />,
        name: "btn_favorite",
        color: '#fdce4b'
    }
];
class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        };
    }
    render() {
        const {open}=this.state;
        return (
          <View>
              <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                         backgroundColor={'#333'}
                         barStyle="light-content"/>
              <Header1 title="یاداشت ها" onBackPress={() => {
                  this.props.navigation.goBack();
              }}/>
              <View>
                  <Fab
                      actions={actions}
                      style={{right: 40, bottom: 120}}
                      rotation={"45deg"}
                      onPress={name => {
                          if(name == "btn_detail"){
                              alert(`Hi, you clicked on ${name}`)
                          }
                      }}
                  />
              </View>
          </View>
        );
    }
}


export default Note;
