import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView,
  Accordion,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator, Card } from 'native-base';

export default class Setting extends Component {
  state = {
    switchValue0: true,
    switchValue1: false,
    switchValue2: false
  };

  render() {

    return (
      <View style={ styles.container}>
        <ScrollView>
          <View style={styles.viewacount}>
            <Text style={styles.textacount}>حساب ها</Text>
          </View>
          <View style={{ backgroundColor: '#fff', flexDirection: 'column', height: 250, width: '95%', alignSelf: 'center', elevation: 5 }}>
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', marginTop: 30 }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ch')}>
                <View style={{ flexDirection: 'row-reverse' }}>
                  <Icon
                    style={styles.icon}
                    name='lock'
                    size={21} />
                  <Text style={styles.textstyle}>
                    تغییر رمز عبور</Text>
                </View>
              </TouchableOpacity>
              <View>
                <Icon
                  style={styles.icon}
                  name='chevron-left'
                  size={15} />
              </View>
            </View>
            <View style={styles.view1}>
              <View style={{ flexDirection: 'row-reverse' }}>
                <Icon
                  style={styles.icon}
                  name='bell'
                  size={17} />
                <Text style={styles.textstyle}>اعلان ها</Text>
              </View>
              <View>
                <Icon
                  style={styles.icon}
                  name='chevron-left'
                  size={15} />
              </View>
            </View>
            <View style={styles.view1}>
              <View style={{ flexDirection: 'row-reverse' }}>
                <Icon
                  style={styles.icon}
                  name='cog'
                  size={21} />
                <Text style={styles.textstyle}>تنظیمات حریم خصوصی</Text>
              </View>
              <View>
                <Icon
                  style={styles.icon}
                  name='chevron-left'
                  size={15} />
              </View>
            </View>
            <View style={styles.view1}>
              <View style={{ flexDirection: 'row-reverse' }}>
                <Icon
                  style={styles.icon}
                  name='credit-card'
                  size={18} />
                <Text style={styles.textstyle}>پرداخت</Text>
              </View>
              <View>
                <Icon
                  style={styles.icon}
                  name='chevron-left'
                  size={15} />
              </View>
            </View>
            <View style={styles.view1}>
              <View style={{ flexDirection: 'row-reverse' }}>
                <Icon
                  style={styles.icon}
                  name='sign-out'
                  size={18} />
                <Text style={styles.textstyle}>خروج</Text>
              </View>
            </View>
          </View>
          <View style={{backgroundColor:'#E3ECEB',height:50,width:'95%',marginLeft:10,}}>
                <Text style={{alignSelf:'flex-end',justifyContent:'flex-end',marginRight:15,marginTop:10,color:'#067062',fontFamily:"IRANSansMobile_Bold"}}>
                    گزینه های بیشتر</Text>
                    </View>
          <Card style={{ marginRight: 10, marginLeft: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 2, }}>
            
            

                <View style={{ flexDirection: 'row-reverse', marginTop: 35, justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row-reverse' }}>
                    <Icon
                      style={styles.icon}
                      name='envelope-open'
                      size={16} />
                    <Text style={styles.textstyle}>
                      خبرنامه</Text>
                  </View>
                  <View>
                    <Switch
                      style={{}}
                      value={this.state.switchValue0}
                      onValueChange={(switchValue0) => this.setState({ switchValue0 })} />
                  </View>

                </View>
                <View style={styles.view1}>
                  <View style={{ flexDirection: 'row-reverse' }}>
                    <Icon
                      style={styles.icon}
                      name='envelope'
                      size={16} />
                    <Text style={styles.textstyle}>پیام متنی</Text>
                  </View>
                  <View>
                    <Switch
                      style={{}}
                      value={this.state.switchValue1}
                      onValueChange={(switchValue1) => this.setState({ switchValue1 })} />
                  </View>
                </View>
                <View style={styles.view1}>
                  <View style={{ flexDirection: 'row-reverse',marginBottom:20 }}>
                    <Icon
                      style={styles.icon}
                      name='phone-square'
                      size={16} />
                    <Text style={styles.textstyle}>تماس تلفنی</Text>
                  </View>
                  <View>
                    <Switch
                      style={{}}
                      value={this.state.switchValue1}
                      onValueChange={(switchValue1) => this.setState({ switchValue1 })} />
                  </View>
                </View>
               

          
          </Card>


        </ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  viewacount: {
    backgroundColor: '#067062', 
    height: 45, 
    width: '95%',
     marginLeft: 10,
     borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
       marginTop: 28
  },
  textacount:{
    color: '#fff', 
     alignSelf: 'flex-end',
      justifyContent: 'flex-end',
       marginRight: 20, 
       marginTop: 8, 
       fontFamily: "Vazir-Black"
  },
  icon:{
    color: '#473F3F',
    marginHorizontal: 10
  },
  colaps:{
    height: 45, 
    backgroundColor: '#067062',
     borderTopLeftRadius: 10,
      borderTopRightRadius: 10
  
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


  textstyle: {
    color: '#473F3F',
     fontSize: 12, 
     fontFamily: "IRANSansMobile_Bold"

  },
  view1: {
    flexDirection: 'row-reverse',
     marginTop: 20,
      justifyContent: 'space-between'

  }

});