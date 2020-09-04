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
  ActivityIndicator
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';
import {
  firstNameChanged,
  lastNameChanged,
  fatherNameChanged,
  nationalCodeChanged,
  idNumChanged,
  genderChanged,
  addressChanged,
  mobileChanged,
  emailChanged,
  passwordChanged,
  registerLawyer,
} from '../../Redux/action/RegisterLawAction';
import {stylesRegisterLawyers} from './styleRegister';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//................icons....................................
class Regjester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
      international: '+98'
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  clickEventListener = () => {
    this.setModalVisible(false);
  };


  // ...............redux....................
  onFirstNamechange(text) {
    this.props.firstNameChanged(text);
  }
  onLastNamechange(text) {
    this.props.lastNameChanged(text);
  }
  onFatherNamehange(text) {
    this.props.fatherNameChanged(text);
  }
  onNationalCodechange(text) {
    this.props.nationalCodeChanged(text);
  }
  onIdNumchange(text) {
    this.props.idNumChanged(text);
  }
  onGenderchange(text) {
    this.props.genderChanged(text);
  }
  onAddresschange(text) {
    this.props.addressChanged(text);
  }
  onMobilechange(text) {
    this.props.mobileChanged(text);
  }
  onEmailchange(text) {
    this.props.emailChanged(text);
  }
  onPasswordchange(text) {
    this.props.passwordChanged(text);
  }

showAlert = () => {
  this.setState({
      showAlert: true
  });
};

hideAlert = () => {
  this.setState({
      showAlert: false
  });
};
validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  };
onRegisterLawyer() {


  if (this.props.firstName === '') {
      this.setState({message: 'نام را وارد نماید'})
      this.showAlert();
  } else if (this.props.lastName === '') {
      this.setState({message: 'نام خانوادگی را وارد نماید'})
      this.showAlert();
  } else if (this.props.fatherName === '') {
      this.setState({message: 'نام پدر را وارد کنید'})
      this.showAlert();
  } else if (this.props.nationalCode === '') {
      this.setState({message: 'کد ملی را وارد کنید'})
      this.showAlert();
  } else if (this.props.idNum === '') {
      this.setState({message: 'شماره شناسنامه را وارد کنید'})
      this.showAlert();
    } else if (this.props.gender === '') {
      this.setState({message: 'جنسیت را وارد کنید'})
      this.showAlert();
    } else if (this.props.address === '') {
      this.setState({message: 'آدرس  محل سکونت را وارد کنید'})
      this.showAlert();
    } else if (this.props.mobile === '') {
      this.setState({message: 'شماره موبایل را وارد کنید'})
      this.showAlert();
    }  else  if (!this.validateEmail(this.props.email)) {

    this.setState({message: ' ایمیل را به صورت صحیح وارد کنید'})
    this.showAlert();
}
 else if (this.props.email === ''){
  this.setState({message: 'ایمیل خود را وارد کنید'})
  this.showAlert();
  } else if (vmsNationalCode(this.props.nationalCode) === false) {
      this.setState({message: 'شماره ملی نامعتبر است '})
      this.showAlert();
  } else

  {
      this.props.navigation.push('complete')
  }
}
  render() {
    const {showAlert} = this.state;
    return (
      <View style={stylesRegisterLawyers.container}>
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

        <View style={stylesRegisterLawyers.headerContent}>
                <Image style={stylesRegisterLawyers.avatar}
              source={require('../../../assets/image/ss1.png')}/>
  <Text style={stylesRegisterLawyers.vakil}>وکیل شما</Text>

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
          فرم تکمیل مشخصات فردی وکلا
        </Text>
        <ScrollView style={stylesRegisterLawyers.card1}>
        <View style={stylesRegisterLawyers.card2}>
            <View style={[stylesRegisterLawyers.inputContainer, {marginTop: 20}]}>
              <TextInput
                style={stylesRegisterLawyers.inputs}
                placeholder="نام"
                keyboardType="name-phone-pad"
                underlineColorAndroid="transparent"
                onChangeText={this.onFirstNamechange.bind(this)}
                value={this.props.firstName}
              />
            </View>
            <View style={[stylesRegisterLawyers.inputContainer]}>
              <TextInput
                style={stylesRegisterLawyers.inputs}
                placeholder=" نام خانوادگی"
                keyboardType="name-phone-pad"
                underlineColorAndroid="transparent"
                onChangeText={this.onLastNamechange.bind(this)}
                value={this.props.lastName}
              />
            </View>
            <View style={[stylesRegisterLawyers.inputContainer]}>
              <TextInput
                style={stylesRegisterLawyers.inputs}
                placeholder="نام پدر"
                keyboardType="name-phone-pad"
                underlineColorAndroid="transparent"
                onChangeText={this.onFatherNamehange.bind(this)}
                value={this.props.fatherName}
              />
            </View>
            <View style={[stylesRegisterLawyers.inputContainer]}>
              <TextInput
                style={stylesRegisterLawyers.inputs}
                placeholder="کدملی"
                keyboardType="number-pad"
                underlineColorAndroid="transparent"
                onChangeText={this.onNationalCodechange.bind(this)}
                value={this.props.nationalCode}
              />
            </View>
            <View style={[stylesRegisterLawyers.inputContainer]}>
              <TextInput
                style={stylesRegisterLawyers.inputs}
                placeholder="شماره شناسنامه"
                keyboardType="number-pad"
                underlineColorAndroid="transparent"
                onChangeText={this.onIdNumchange.bind(this)}
                value={this.props.idNum}
              />
            </View>
            <View style={[stylesRegisterLawyers.inputContainer]}>
              <TextInput
                style={stylesRegisterLawyers.inputs}
                placeholder="جنسیت"
                keyboardType="name-phone-pad"
                underlineColorAndroid="transparent"
                onChangeText={this.onGenderchange.bind(this)}
                value={this.props.gender}
              />
            </View>

            <View style={[stylesRegisterLawyers.inputContainer]}>
              <TextInput
                style={stylesRegisterLawyers.inputs}
                placeholder="آدرس محل سکونت"
                keyboardType="name-phone-pad"
                underlineColorAndroid="transparent"
                onChangeText={this.onAddresschange.bind(this)}
                value={this.props.address}
              />
            </View>
            <View style={[stylesRegisterLawyers.inputContainer]}>
              <TextInput
                style={stylesRegisterLawyers.inputs}
                placeholder="شماره همراه"
                keyboardType="number-pad"
                underlineColorAndroid="transparent"
                onChangeText={this.onMobilechange.bind(this)}
                value={this.props.mobile}
              />
            </View>
            <View style={[stylesRegisterLawyers.inputContainer]}>
              <TextInput
                style={stylesRegisterLawyers.inputs}
                placeholder=" ایمیل"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={this.onEmailchange.bind(this)}
                value={this.props.email}
              />
            </View>
            <View style={[stylesRegisterLawyers.inputContainer]}>
              <TextInput
                style={stylesRegisterLawyers.inputs}
                placeholder="رمز"
                keyboardType='name-phone-pad'
                underlineColorAndroid="transparent"
                onChangeText={this.onPasswordchange.bind(this)}
                value={this.props.password}
              />
            </View>
            <Button
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
        onPress={this.onRegisterLawyer.bind(this)}
        titleStyle={{color: '#fff', fontFamily: 'Vazir-Black'}}
        title="مرحله بعد"
      />
          </View>
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
            messageStyle={{fontSize: 14,fontFamily: 'Vazir-Black',color:'#333'}}
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
        </ScrollView>
        <Modal
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
          <View style={stylesRegisterLawyers.popupOverlay}>
            <View style={stylesRegisterLawyers.popup}>
              <View style={stylesRegisterLawyers.popupContent}>
                <ScrollView contentContainerStyle={stylesRegisterLawyers.modalInfo}>
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
                    style={stylesRegisterLawyers.toch}
                    onPress={() => this.props.navigation.navigate('login')}>
                    <Text style={stylesRegisterLawyers.textsabt1}> قوانین را نمی پذیرم</Text>
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
                    <Text style={(stylesRegisterLawyers.textsabt1, {color: '#fff'})}>
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


const mapstatetoprops = (state) => {
  return {
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    fatherName: state.auth.fatherName,
    nationalCode: state.auth.nationalCode,
    idNum: state.auth.idNum,
    gender: state.auth.gender,
    address: state.auth.address,
    mobile: state.auth.mobile,
    email: state.auth.email,
    password: state.auth.password,
    loading: state.auth.loading,
    error: state.auth.error,
  };
};
export default connect(mapstatetoprops, {
  firstNameChanged,
  lastNameChanged,
  fatherNameChanged,
  nationalCodeChanged,
  idNumChanged,
  genderChanged,
  addressChanged,
  mobileChanged,
  emailChanged,
  passwordChanged,
  registerLawyer,
})(Regjester);
function vmsNationalCode(input) {
  if (!/^\d{10}$/.test(input)
      || input === '0000000000'
      || input === '1111111111'
      || input === '2222222222'
      || input === '3333333333'
      || input === '4444444444'
      || input === '5555555555'
      || input === '6666666666'
      || input === '7777777777'
      || input === '8888888888'
      || input === '9999999999')
      return false;
  var check = parseInt(input[9]);
  var sum = 0;
  var i;
  for (i = 0; i < 9; ++i) {
      sum += parseInt(input[i]) * (10 - i);
  }
  sum %= 11;
  return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
}
