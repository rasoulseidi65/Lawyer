import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  Dimensions,
  Modal,
  ActivityIndicator,Alert
} from 'react-native';

import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {
    mobileChanged,
    passwordChanged,
    registerUser

} from "../../Redux/action/ActionRegisterUser";

import {stylesRegisterUser} from './styleRegister';

class RegisterUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile   : '',
            password: '',
            modalVisible: true,
            international: '+98'
        }
    }
     onMobileChange(text) {
         this.props.mobileChanged(text)
     }

     onPasswordChange(text) {
         this.props.passwordChanged(text)
     }

     onRegisterUser() {
         const {mobile, password} = this.props;
         const {navigation}= this.props;
         if((mobile.length<1) || (password.length<1 )){
          this.setState({message:'اطلاعات را کامل وارد کنید '})
          this.showAlert();
        }
        else
            if(mobile.length<11  ){
                this.setState({message:'شماره همراه را صحیح وارد نمائید'})
                this.showAlert();
            }
            else
            if(password.length<6){
              this.setState({message:'حداقل طول رمز عبور 6 کاراکتر است'})
              this.showAlert();

            }else{
 this.props.registerUser({mobile, password, navigation});

            }

     }

     renderRegister(){
         if(this.props.loading){
             return(<ActivityIndicator size="large" color="#067062" />);
         }
         return (<Button
          buttonStyle={{
            alignSelf:'center',

           width:'80%',
            height: 45,
            backgroundColor: '#067062',
            borderRadius: 30,
            shadowColor: '#067062',
            marginTop: 15,
            marginVertical: 20,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
          }}
          onPress={this.onRegisterUser.bind(this)}
          titleStyle={{color: '#fff', fontFamily: 'Vazir-Black'}}
          title="ثبت نام"
          /> )
     }
     setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
    clickEventListener = () => {
      this.setModalVisible(false);
    };
    showAlert = () => {
      this.setState({
        showAlert: true,
      });
    };

    hideAlert = () => {
      this.setState({
        showAlert: false,
      });
    };
    render() {
      const {showAlert} = this.state;
        return (
            <View style={stylesRegisterUser.container}>
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

             <View style={stylesRegisterUser.headerContent}>
                <Image style={stylesRegisterUser.avatar}
              source={require('../../../assets/image/ss1.png')}/>
  <Text style={stylesRegisterUser.vakil}>وکیل شما</Text>

            </View>
            <Text
              style={{
                color: '#fff',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 20,
                fontSize: 16,
                fontFamily: 'Vazir-Black',
              }}>
فرم ثبت نام کاربر معمولی
            </Text>


            <ScrollView style={stylesRegisterUser.card1}>
        <View style={stylesRegisterUser.card2}>
               <View style={{marginTop:80}}>
                <View style={[stylesRegisterUser.inputContainer,{marginTop:20}]}>
                  <TextInput
                    style={stylesRegisterUser.inputs}
                    placeholder="شماره همراه"
                    keyboardType="number-pad"
                    underlineColorAndroid="transparent"
                    onChangeText={this.onMobileChange.bind(this)}
                    value={this.props.mobile}
                  />
                </View>

                <View style={[stylesRegisterUser.inputContainer]}>
                  <TextInput
                    style={stylesRegisterUser.inputs}
                    placeholder="رمز"
                    keyboardType='name-phone-pad'
                    underlineColorAndroid="transparent"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                  />
                </View>
                </View>
                {this.renderRegister()}
            </View>
            </ScrollView>

            <AwesomeAlert
            contentContainerStyle={{width:'80%',borderRadius:5}}
       overlayStyle={{ backgroundColor: 'rgba(00,00,00,.80)'}}
            show={showAlert}
            showProgress={false}
            title="اخطار!"
            message={this.state.message}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            titleStyle={{fontSize: 16,fontFamily: 'Vazir-Black',color:'#333'}}
            messageStyle={{fontSize: 12,fontFamily: 'Vazir-Black',color:'#333'}}
            confirmText="بله"
            confirmButtonColor="#067062"
            confirmButtonStyle={{}}
            confirmButtonTextStyle={{
              fontSize: 17,
             fontFamily: 'Vazir-Black',
            }}
            onConfirmPressed={() => {
              this.hideAlert();
            }}
          />

            <Modal
           hasBackdrop={false}
              animationType={'fade'}
              transparent={true}
              onRequestClose={() => this.setModalVisible(true)}
              visible={this.state.modalVisible}>
              <View style={{width: '100%', backgroundColor: '#067062'}}>
                <View
                  style={{
                    paddingVertical: 7,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text></Text>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#fff',
                        marginBottom: 5,
                        fontFamily: 'Far_Aref',
                      }}>
                      قوانین من
                    </Text>
                  </View>
                </View>
              </View>
              <View style={stylesRegisterUser.popupOverlay}>
                <View style={stylesRegisterUser.popup}>
                  <View style={stylesRegisterUser.popupContent}>
                    <ScrollView contentContainerStyle={stylesRegisterUser.modalInfo}>
                      <View style={{marginHorizontal: 15, marginTop: 20}}>
                        <Text
                          style={{
                            fontFamily: 'Vazir-Black',
                            fontSize: 14,
                            color: '#555',
                          }}>
                          اَپ حقوقی اندرویدی که معرفی آن را در قضاوت آنلاین در نظر
                          گرفتیم، «دستور» نام دارد. این نرم افزار متعلق به مرکز آمار
                          و فناوری اطلاعات قوه قضایی است که دستیابی به قوانین و
                          مقررات حقوقی و کیفری را به شکل شایسته‌ای آسان نموده و مسیر
                          پژوهش در متون قانونی را برای قضات، وکلا، دانشجویان حقوق و
                          فقه و همچنین محققان فراهم ساخته است. در این نرم افزار، متن
                          بیش از ۸۰۰ عنوان از قوانین و مقررات حقوقی و کیفری مورد
                          نیاز در ۶۲ گروه ارائه گردیده است. این نرم افراز حاوی
                          مجموعه قوانین و مقررات حقوقی و کیفری تنقیح شده به همراه
                          نظریات مشورتی اداره حقوقی است و تاکنون تعداد ۵٬۰۰۰ نصب
                          فعال دارد. ﻧﺮﻡ ﺍﻓﺰﺍﺭ ﺑﻪ ﺳﻔﺎﺭﺵ ﻣﺮﮐﺰ ﺁﻣﺎﺭ ﻭ ﻓﻨﺎﻭﺭﯼ ﺍﻃﻼﻋﺎﺕ
                          ﻗﻮﻩ ﻗﻀﺎﺋﯿﻪ ﻭ ﺑﻪ ﻫﻤﺖ ﻣﺮﮐﺰ ﺗﺤﻘﯿﻘﺎﺕ ﮐﺎﻣﭙﯿﻮﺗﺮﯼ ﻋﻠﻮﻡ ﺍﺳﻼﻣی(نور)
                          ﺗﻬﯿﻪ ﺷﺪﻩ ﺍﺳﺖ.
                        </Text>
                      </View>
                    </ScrollView>

                    <View
                      style={{
                        width: '100%',
                        height: 40,
                        backgroundColor: '#FFF',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginBottom: 20,
                      }}>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        style={stylesRegisterUser.toch}
                        onPress={() => this.props.navigation.navigate('loginuser')}>
                        <Text style={stylesRegisterUser.textsabt1}> قوانین را نمی پذیرم</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginTop: 8,
                          backgroundColor: '#067062',
                          width: '42%',
                          height: 40,
                          borderRadius: 60,
                        }}
                        onPress={() => this.setModalVisible(false)}>
                        <Text style={(stylesRegisterUser.textsabt1, {color: '#fff'})}>
                          {' '}
                          قوانین را می پذیرم
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
            </View>
            );
            }
            }


const mapStateToProps = state => {
    return {
        mobile: state.registerOrdinaryUser.mobile,
        password: state.registerOrdinaryUser.password,
        loading: state.registerOrdinaryUser.loading,
        success:state.registerOrdinaryUser.success,
        error: state.registerOrdinaryUser.error
    }
}
export default connect(mapStateToProps, {
    mobileChanged,
    passwordChanged,
    registerUser
})(RegisterUser);
