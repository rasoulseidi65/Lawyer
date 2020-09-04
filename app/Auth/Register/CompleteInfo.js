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

} from 'react-native';
import Select2 from 'react-native-select-two';
import {Button} from 'react-native-elements';
const mockData = [
    {id: 1, name: 'کاردانی'},
    {id: 2, name: 'کارشناسی'},
    {id: 3, name: 'کارشناسی ارشد'},
    {id: 4, name: 'دکتری'},
  ]
  import AwesomeAlert from 'react-native-awesome-alerts';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {
  typeEmployeChanged,
  degreChanged,
  dateLawyerLicenseChanged,
  workExperienceChanged,
  phoneNumberChanged,

} from '../../Redux/action/RegisterLawAction';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//................icons....................................

class CompleteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        datatype:[
            {id: 1, name: 'وکیل'},
            {id: 2, name: 'کارآموز وکالت'},
            {id: 3, name: 'تحصیلات حقوقی(دانشجو)'},
        ],
        datadegree:[
          {id: 1, name: 'کاردانی'},
          {id: 2, name: 'کارشناسی'},
          {id: 3, name: 'کارشناسی ارشد'},
          {id: 4, name: 'دکتری'},
      ]
    };
  }
  // ...............redux....................
  onTypeEmployechange(text) {
    this.props.typeEmployeChanged(text);
  }
  onDegrechange(text) {
    this.props.degreChanged(text);
  }
  onDateLawerLicensehange(text) {
    this.props.dateLawyerLicenseChanged(text);
  }
  onWorkExperienceCodechange(text) {
    this.props.workExperienceChanged(text);
  }
  onPhoneNumberchange(text) {
    this.props.phoneNumberChanged(text);
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
  onComplexLawyer() {

    if (this.props.typeEmployee === '') {
        this.setState({message: 'نوع کاربر وارد نماید'})
        this.showAlert();
    } else if (this.props.degree === '') {
        this.setState({message: 'میزان تحصیلات را وارد نماید'})
        this.showAlert();
    // } else if (this.props.dateLawyerLicense === '') {
    //     this.setState({message: 'تاریخ اعتبار پروانه وکالت'})
    //     this.showAlert();
    } else if (this.props.workExperience === '') {
        this.setState({message: 'سابقه کار وارد نماببد'})
        this.showAlert();
    } else if (this.props.phoneNumber === '') {
        this.setState({message: 'تلفن ثابت را وارد کنید'})
        this.showAlert();
    } else

    {
        this.props.navigation.push('Attech')
    }
  }
  render() {
    const {showAlert} = this.state;
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

        <View style={styles.headerContent}>
                <Image style={styles.avatar}
              source={require('../../../assets/image/ss1.png')}/>
  <Text style={styles.vakil}>وکیل شما</Text>

            </View>
            <Text
              style={{
                color: '#fff',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 10,
                fontSize: 16,
                fontFamily: 'Vazir-Black',
              }}>
          فرم مشخصات فردی
        </Text>
        <Text
              style={{
                color: '#fff',
                justifyContent: 'center',
               marginHorizontal:5,
                marginTop:5,
                fontSize: 14,
                fontFamily: 'Vazir-Black',
                textAlign:'center',


              }}>
         *توجه  اگر وکیل هستید حتما تاریخ اعتبار پروانه وکالت را وارد نماید  در غیر اینصورت لازم نیست
        </Text>
        <ScrollView style={styles.card1}>
        <View style={styles.card2}>

            <View style={{marginTop: 10}}>
              {/* <Select2
                isSelectSingle
                style={styles.towSelect}
                colorTheme="#067062"
                defaultFontName={'Vazir-Black'}
                popupTitle="نوع کاربر"
                cancelButtonText="انصراف"
                selectButtonText="تایید"
                searchPlaceHolderText="جستجو"
                title="نوع کاربر"
                data={this.state.datatype}

                data={this.state.datatype}
                onSelect={datatype => {
                    for (var i = 0; i < this.state.datatype.length; i++) {
                        if (this.state.datatype[i]['id'] == datatype) {
                              // Alert.alert(this.state.datatype[i]['name'])
                            //this.setState({ typeEmployee: this.state.datatype[i]['name']});
                       this.onTypeEmployechange({ typeEmployee: this.state.datatype[i]['name']})
                        }
                    }
                }}
              />
            </View>
            <View>
              <Select2
                isSelectSingle
                style={styles.towSelect}
                colorTheme="#067062"
                defaultFontName={'Vazir-Black'}
                popupTitle="مدرک تحصیلی"
                cancelButtonText="انصراف"
                selectButtonText="تایید"
                searchPlaceHolderText="جستجو"
                title="تحصیلات"
                data={this.state.datadegree}

                data={this.state.datadegree}
                onSelect={datadegree => {
                    for (var i = 0; i < this.state.datadegree.length; i++) {
                        if (this.state.datadegree[i]['id'] == datadegree) {
                              // Alert.alert(this.state.datatype[i]['name'])
                            // this.setState({ workExperience: this.state.datadegree[i]['name']});

                        }
                            this.props.onDegrechange( this.state.datadegree[i]['name']);

                    }
                }}
              /> */}
                <View style={[styles.inputContainer]}>
               <TextInput
                style={styles.inputs}
                placeholder="نوع کاربر(وکیل-کاراموزوکالت-دانشجو حقوق)"
                keyboardType='name-phone-pad'
                underlineColorAndroid="transparent"
                onChangeText={this.onTypeEmployechange.bind(this)}
                value={this.props.typeEmployee}
              />
              </View>
            </View>
            <View style={[styles.inputContainer]}>
              <TextInput
                style={styles.inputs}
                placeholder="تحصیلات"
                keyboardType="name-phone-pad"
                underlineColorAndroid="transparent"
                onChangeText={this.onDegrechange.bind(this)}
                value={this.props.degree}
              />
            </View>

            <View style={[styles.inputContainer, ]}>
              <TextInput
                style={styles.inputs}
                placeholder=" تاریخ اعتبار پروانه وکالت"
                keyboardType='name-phone-pad'
                underlineColorAndroid="transparent"
                onChangeText={this.onDateLawerLicensehange.bind(this)}
                value={this.props.dateLawyerLicense}
              />
            </View>
            <View style={[styles.inputContainer]}>
              <TextInput
                style={styles.inputs}
                placeholder="سابقه کار"
                keyboardType="name-phone-pad"
                underlineColorAndroid="transparent"
                onChangeText={this.onWorkExperienceCodechange.bind(this)}
                value={this.props.workExperience}
              />
            </View>

            <View style={[styles.inputContainer]}>
              <TextInput
                style={styles.inputs}
                placeholder="تلفن ثابت"
                keyboardType="phone-pad"
                underlineColorAndroid="transparent"
                onChangeText={this.onPhoneNumberchange.bind(this)}
                value={this.props.phoneNumber}
              />
            </View>
            <AwesomeAlert
            contentContainerStyle={{width:'80%',borderRadius:5}}
       overlayStyle={{ backgroundColor: 'rgba(00,00,00,.80)', width: '100%',
       height:'100%',}}
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
            <Button
        buttonStyle={{
          marginHorizontal: 45,
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
        onPress={this.onComplexLawyer.bind(this)}
        titleStyle={{color: '#fff', fontFamily: 'Vazir-Black'}}
        title="مرحله بعد"
      />

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

  // ...........کارد اصلی...........
  card1: {
    width:'100%',
   marginTop:20,
    alignSelf: 'center',
    height: windowHeight,

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
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  card2: {
    width:'100%',
   marginTop:20,
    alignSelf: 'center',


    shadowColor: '#3d933c',
    backgroundColor: '#fff',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  textstyle: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginBottom: 18,
  },
  text: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Vazir-Black',
  },

  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#e2e2e2',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: '80%',
    height: 50,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  inputs: {
    height: 45,
    marginRight: 13,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    fontFamily: 'IRANSansMobile(FaNum)_Bold',
    color: '#555',
    marginLeft: 10,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
    color: '#067062',
  },
  textsabt: {
    // marginTop:5,
    fontSize: 14,
    color: '#555',
    fontFamily: 'Vazir-Black',
  },

  towSelect: {
    backgroundColor: '#e2e2e2',
    height: 47,
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 70,
  },
  vakil: {
    color: '#067062',
    marginTop: -40,
    fontSize: 20,
    fontFamily: 'Lalezar-Regular',
  },
  headerContent:{

    alignItems: 'center',
    backgroundColor: '#fff',
    height: 112,
    width: 112,
    justifyContent: 'center',
    alignSelf: 'center',

    shadowOpacity: 0.9,
    shadowRadius: 7.49,
    elevation: 12,
    borderRadius: 100,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 63,

  },
});
const mapstatetoprops = (state) => {
  return {

    typeEmployee: state.auth.typeEmployee,
    degree: state.auth.degree,
    dateLawyerLicense: state.auth.dateLawyerLicense,
    workExperience: state.auth.workExperience,
    phoneNumber: state.auth.phoneNumber,
    loading: state.auth.loading,
    error: state.auth.error,
  };
};
export default connect(mapstatetoprops, {
  typeEmployeChanged,
  degreChanged,
  dateLawyerLicenseChanged,
  workExperienceChanged,
  phoneNumberChanged,

})(CompleteInfo);
