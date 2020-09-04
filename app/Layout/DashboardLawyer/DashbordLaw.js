import {Image, View, Button, StyleSheet, ScrollView, Text, ImageBackground, StatusBar} from "react-native";
import {createDrawerNavigator, DrawerItems,DrawerActions} from 'react-navigation-drawer';
import {createAppContainer,} from 'react-navigation';
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Footer,} from "native-base";
import Home from '../DashboardUser/Home'
import Setting from '../../SharedModule/Setting';
import UserProfile from "../../SharedModule/UserProfile";
import Share from "../../SharedModule/Share";


const CustomDrawerComponent = props => (
    <View style={{flex: 1, backgroundColor: '#067062',}}>

         <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                   backgroundColor={'#0078db'}
                   barStyle="light-content" />

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
const styles = StyleSheet.create({
    container: {
        height: 180,
        backgroundColor: '#067062',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerimage: {
        borderRadius: 75,
        width: 120,
        height: 120,
        marginTop: 15,
    },
    containericon: {
        color: '#067062',
        fontSize: 20,
    },
    containerview1: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: -10,
        flexDirection: 'row',
    },
    containerview: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
    },
    containerfooter: {
        backgroundColor: '#fff',
      //  borderTopColor: '#eeeeee',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    containertext: {
        fontSize: 20,
        justifyContent: 'center',
        color: '#ffff',
    },
    icon: {
        width: 24,
        height: 24,

    },
});

const CustomerMyDrawerNavigator = createDrawerNavigator({
    'صفحه اصلی': {
            screen: Home,
            navigationOptions: {
                headerShown: false,
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row',backgroundColor:'#fff',height:55,justifyContent:'center',alignItems:'center',borderRadius:30}}>
                    <View style={{flex: 9}}>
                        <Text style={{fontFamily:'Vazir-Black', color: '#067062',textAlign:'right',marginRight:30}}>صفحه اصلی</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <Icon name='home' size={20} style={{color: '#067062'}}/>
                    </View>
                </View>
                ),
            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },
        'لیست': {
            screen:UserProfile,
            navigationOptions: {
                headerShown: false,
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row',backgroundColor:'#fff',height:55,justifyContent:'center',alignItems:'center'}}>
                    <View style={{flex: 9}}>
                        <Text style={{fontFamily:'Vazir-Black', color: '#067062',textAlign:'right',marginRight:30}}>پروفایل کاربری</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <Icon name='user-tie' size={20} style={{color: '#067062'}}/>
                    </View>
                </View>
                ),
            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },
        'تنظیمات': {
            screen: Setting,
            navigationOptions: {
                headerShown: false,
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row',backgroundColor:'#fff',height:55,justifyContent:'center',alignItems:'center'}}>
                        <View style={{flex: 9}}>
                            <Text style={{fontFamily:'Vazir-Black', color: '#067062',textAlign:'right',marginRight:30}}>تنظیمات کاربری</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Icon name='user-cog' size={20} style={{color: '#067062'}}/>
                        </View>
                    </View>
                ),
            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },
        'اشتراک گذاری': {
            screen:Share,
            navigationOptions: {
                headerShown: false,
                drawerLabel: (
                    <View style={{flex: 1, flexDirection: 'row',backgroundColor:'#fff',height:55,justifyContent:'center',alignItems:'center'}}>
                        <View style={{flex: 9}}>
                            <Text style={{fontFamily:'Vazir-Black', color: '#067062',textAlign:'right',marginRight:30}}>اشتراک گذاری</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Icon name='share-alt' size={20} style={{color: '#067062'}}/>
                        </View>
                    </View>
                ),
            },
            contentOptions: {
                activeTintColor: '#fff',
            }
        },
    },

    {
        drawerPosition: 'right',
        contentComponent: CustomDrawerComponent,

        drawerWidth:230,
        useNativeAnimations: true,
        drawerBackgroundColor: 'white',

        contentOptions: {

          backgroundColor: '#fff',

          itemsContainerStyle: {
            marginHorizontal: 6,
            marginTop: 10,
            marginBottom: 10,
          },

          itemStyle: {
            height: 45,
            borderRadius: 5,
          },
        },
      },
    );

export default createAppContainer(CustomerMyDrawerNavigator);
