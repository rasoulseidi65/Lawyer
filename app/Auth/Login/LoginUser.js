import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  StatusBar,
  TextInput,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {CheckBox, Card} from 'native-base';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {
  mobileChanged,
  passwordChanged,
  loginOrdinaryUser,
} from '../../Redux/action/ActionLoginUser';
import {ScrollView} from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { stylesLoginUser } from './styleLogin';

//................icons....................................
class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      password: '',
    };
  }

  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1,
    });
  }

  onMobileChange(text) {
    this.props.mobileChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginOrdinaryUser() {
    const {mobile, password} = this.props;
    const {navigation} = this.props;
    if (mobile.length < 1 || password.length < 1) {
      this.setState({message: 'اطلاعات را کامل وارد کنید '});
      this.showAlert();
    } else if (mobile.length < 11) {
      this.setState({message: 'شماره همراه را صحیح وارد نمائید'});
      this.showAlert();
    } else if (password.length < 6) {
      this.setState({message: 'حداقل طول رمز عبور 6 کاراکتر است'});
      this.showAlert();
    }
     else {
      this.props.loginOrdinaryUser({mobile, password, navigation});

    }
  }
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
  onrenderButton() {
    if (this.props.loading) {
      return <ActivityIndicator size="large" color="#067062" />;
    }
    return (
      <Button
        buttonStyle={{
          marginHorizontal: 45,
          marginVertical: 20,
          height: 45,
          backgroundColor: '#067062',
          borderRadius: 30,
          shadowColor: '#067062',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          elevation: 12,
        }}
        onPress={this.onLoginOrdinaryUser.bind(this)}
        titleStyle={{color: '#fff', fontFamily: 'Vazir-Black'}}
        title="ورود"
      />
    );
  }
  render() {
    const {showAlert} = this.state;

    return (
      <View style={stylesLoginUser.container}>
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

        <View style={stylesLoginUser.headerContent}>
          <Image
            style={stylesLoginUser.avatar}
            source={require('../../../assets/image/ss1.png')}
          />
          <Text style={stylesLoginUser.vakil}>وکیل شما</Text>
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
          به اپلیکیشن وکیل شما خوش آمدید!
        </Text>

        <ScrollView style={stylesLoginUser.card1}>
          <View style={stylesLoginUser.card2}>
            <View
              style={[stylesLoginUser.inputContainer, {marginTop: windowHeight / 15}]}>
              <Icon style={stylesLoginUser.inputIcon} name="mobile" size={28} />
              <TextInput
                style={stylesLoginUser.inputs}
                placeholder="شماره همراه"
                keyboardType="numeric"
                maxLength={11}
                value={this.props.mobile}
                underlineColorAndroid="transparent"
                onChangeText={this.onMobileChange.bind(this)}
              />
            </View>

            <View style={[stylesLoginUser.inputContainer]}>
              <Icon style={stylesLoginUser.inputIcon} name="lock" size={25} />
              <TextInput
                style={stylesLoginUser.inputs}
                placeholder="رمز عبور"
                keyboardType="name-phone-pad"
                secureTextEntry={true}
                value={this.props.password}
                underlineColorAndroid="transparent"
                onChangeText={this.onPasswordChange.bind(this)}
              />
            </View>

            <View style={{marginTop: 25, marginRight: 40}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    stylesLoginUser.textsabt,
                    {
                      textAlign: 'right',
                      alignSelf: 'flex-end',
                      marginRight: -10,
                    },
                  ]}>
                  {' '}
                  مرا بخاطر بسپار
                </Text>

                <CheckBox
                  style={{marginRight: 20, marginLeft: 10}}
                  color="#067062"
                  checked={this.state.checkbox1}
                  onPress={() => this.toggleSwitch1()}
                />
              </View>
            </View>
            {this.onrenderButton()}
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('registeruser')}>
              <Text
                style={[stylesLoginUser.textsabt, {alignSelf: 'center', marginTop: 10}]}>
                آیا از قبل حساب ندارید؟ ثبت نام
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ch')}>
              <Text
                style={[stylesLoginUser.textsabt, {alignSelf: 'center', marginTop: 10}]}>
                رمز عبور را فراموش کرده اید؟
              </Text>
            </TouchableOpacity>
            <AwesomeAlert
              contentContainerStyle={{width: '80%', borderRadius: 5}}
              overlayStyle={{backgroundColor: 'rgba(00,00,00,.80)'}}
              show={showAlert}
              showProgress={false}
              title="اخطار!"
              message={this.state.message}
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showConfirmButton={true}
              titleStyle={{
                fontSize: 16,
                fontFamily: 'Vazir-Black',
                color: '#333',
              }}
              messageStyle={{
                fontSize: 12,
                fontFamily: 'Vazir-Black',
                color: '#333',
              }}
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
          </View>
        </ScrollView>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    mobile: state.loginOrdinaryUser.mobile,
    password: state.loginOrdinaryUser.password,
    loading: state.loginOrdinaryUser.loading,
    success: state.loginOrdinaryUser.success,
    error: state.loginOrdinaryUser.error,
  };
};
export default connect(mapStateToProps, {
  mobileChanged,
  passwordChanged,
  loginOrdinaryUser,
})(LoginUser);
