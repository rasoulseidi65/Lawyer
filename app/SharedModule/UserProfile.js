import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    Alert,
    ScrollView,
    ImageBackground,
    StatusBar,
    TextInput,
    Dimensions,
} from 'react-native';
import DialogInput from 'react-native-dialog-input-custom';
import AwesomeAlert from 'react-native-awesome-alerts';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNFetchBlob from 'rn-fetch-blob';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//................icons....................................

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: require('../../assets/image/2.png'),
            dialogVisiblepasword: false,
            ImageSourcepersonal: '',
            user_id: this.props.dataLogin['id'],
            age: this.props.dataLogin['age'],
            major: this.props.dataLogin['major'],
            gender: this.props.dataLogin['gender'],
            city: this.props.dataLogin['city'],
            name_user: '',
            lastname_user: '',
            age_user: '',
            gender_user: '',
            city_user: '',
            major_user: '',
            imagepath: '',
            path: null,
            change_password: '',
        };
    }

    //   .............UserUpdateRegistr................
    UserUpdateRegistr = () => {
        // console.log("name_user=" +this.state.name_user);
        // console.log("lastname_user=" +this.state.lastname_user);
        //             console.log("age_user=" +this.state.age_user);
        //         console.log("gender_user=" +this.state.gender_user);
        //         console.log("city_user=" +this.state.city_user);
        // console.log("major_user=" +this.state.major_user);
        // console.log("imagepath=" +this.state.imagepath);

        fetch('http://194.5.175.25:3005/api/v1/updateUser/' + this.state.user_id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name_user,
                lastname: this.state.lastname_user,
                age: this.state.age_user,
                gender: this.state.gender_user,
                city: this.state.city_user,
                major: this.state.major_user,
                image: this.state.imagepath,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.showAlertSuccess();
                this.setState({textMessageBox: 'ویرایش با موفقیت انجام شد'});
                //  this.ShowProfileRecord();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    //   ..............Show...................

    SelectPhotopersonal() {
        const options = {
            title: 'عکس  خود را انتخاب کنید',
            takePhotoButtonTitle: 'انتخاب عکس با دوربین',
            chooseFromLibraryButtonTitle: 'انتخاب عکس از گالری',
            cancelButtonTitle: 'انصراف',
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                let source = {uri: response.uri};

                this.setState({
                    ImageSourcepersonal: source,
                });
                RNFetchBlob.fetch(
                    'POST',
                    'http://194.5.175.25:3005/Api/v1/image',
                    {
                        Authorization: 'Bearer access-token',
                        otherHeader: 'image',
                        'Content-Type': 'multipart/form-data',
                    },
                    [
                        {
                            name: 'image',
                            type: 'image/png',
                            filename: response.fileName,
                            data: response.data,
                        },
                    ],
                )
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.success === true) {
                            console.log(responseJson.imagePath);
                        }
                        this.setState({imagepath: responseJson.data['path']});
                    })
                    .done();
            }
        });
    }

    // ..................
    UserRegisterpassword = (newPassword) => {
        console.log(this.state.user_id);
        if (newPassword === '') {
            this.setState({textMessageBox: 'رمز جدید را وارد نمائید'});
            this.showAlertSuccess();
        } else if (newPassword.length < 6) {
            this.setState({textMessageBox: 'حداقل طول رمز باید 6 کاراکتر باشد'});
            this.showAlertSuccess();
        } else {
            fetch(
                'http://194.5.175.25:3005/api/v1/changepassword/' + this.state.user_id,
                {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        password: newPassword,
                    }),
                },
            )
                .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.success === true) {
                        this.setState({textMessageBox: 'رمز با موفقیت تغییر کرد'});
                        this.showAlertSuccess();
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };
    showAlertSuccess = () => {
        this.setState({
            showAlertSuccess: true,
        });
    };
    hideAlertSuccess = () => {
        this.setState({
            showAlertSuccess: false,
        });
    };
    // ...........dialoge..............

    showDialogp = () => {
        this.setState({dialogVisiblepasword: true});
    };

    handleCancel = () => {
        this.setState({dialogVisiblepasword: false});
    };

    sendInput(inputText) {
        console.log('sendInput (DialogInput#1): ' + inputText);
    }

    render() {
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
                        <Icon name="arrow-right" color="#fff" size={20}/>
                    </View>
                </TouchableOpacity>

                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 20,
                        marginTop: 10,
                    }}>
                    <View
                        style={{
                            marginLeft: 2,
                            flexDirection: 'row',
                        }}>
                        <Image
                            source={
                                require('../../assets/image/87.jpg') +
                                this.state.ImageSourcepersonal
                            }
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 100,
                                marginTop: 10,
                                borderColor: '#fff',
                                borderWidth: 2,
                            }}
                        />
                        <View
                            style={{
                                marginLeft: -22,
                            }}>
                            <TouchableOpacity onPress={this.SelectPhotopersonal.bind(this)}>
                                <Icon
                                    style={{marginTop: 80, fontSize: 25, color: '#fff'}}
                                    name="camera"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text
                        style={{
                            marginTop: 5,
                            color: '#fff',
                            fontSize: 16,
                            fontFamily: 'Vazir-Black',
                            alignSelf: 'center',
                        }}>
                        {' '}
                        تارا نظری
                    </Text>

                </View>

                <ScrollView>
                    <View style={styles.card1}>
                        <View style={[styles.inputContainer, {marginTop: 40}]}>
                            <Icon style={styles.inputIcon} name="pencil-square-o" size={20}/>
                            <TextInput
                                style={styles.inputs}
                                placeholder={this.state.name}
                                underlineColorAndroid="transparent"
                                onChangeText={(name) => this.setState({name_user: name})}
                            />
                        </View>
                        <View style={[styles.inputContainer]}>
                            <Icon
                                style={styles.inputIcon}

                                name="pencil-square-o"
                                size={20}
                            />
                            <TextInput
                                style={styles.inputs}
                                placeholder={this.state.lastname}
                                keyboardType="name-phone-pad"
                                underlineColorAndroid="transparent"
                                onChangeText={(lastname) => this.setState({lastname_user: lastname})}
                            />
                        </View>
                        <View style={[styles.inputContainer, {marginBottom: 5}]}>
                            <Icon
                                style={styles.inputIcon}
                                n
                                name="pencil-square-o"
                                size={20}
                            />
                            <TextInput
                                style={styles.inputs}
                                placeholder={this.state.major}
                                keyboardType="name-phone-pad"
                                underlineColorAndroid="transparent"
                                onChangeText={(major) => this.setState({major_user: major})}
                            />
                        </View>
                        <View style={[styles.inputContainer, {marginBottom: 5}]}>
                            <Icon
                                style={styles.inputIcon}

                                name="pencil-square-o"
                                size={20}
                            />
                            <TextInput
                                style={styles.inputs}
                                placeholder={this.state.gender}
                                keyboardType="name-phone-pad"
                                underlineColorAndroid="transparent"
                                underlineColorAndroid="transparent"
                                onChangeText={(gender) => this.setState({gender_user: gender})}
                            />
                        </View>
                        <View style={[styles.inputContainer, {marginBottom: 5}]}>
                            <Icon
                                style={styles.inputIcon}

                                name="pencil-square-o"
                                size={20}
                            />
                            <TextInput
                                style={styles.inputs}
                                placeholder={this.state.age}
                                keyboardType="name-phone-pad"
                                underlineColorAndroid="transparent"
                                onChangeText={(age) => this.setState({age_user: age})}
                            />
                        </View>

                        <View style={[styles.inputContainer, {marginBottom: 5}]}>
                            <Icon
                                style={styles.inputIcon}

                                name="pencil-square-o"
                                size={20}
                            />
                            <TextInput
                                style={styles.inputs}
                                placeholder={this.state.city}
                                keyboardType="name-phone-pad"
                                underlineColorAndroid="transparent"
                                onChangeText={(city) => this.setState({city_user: city})}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 30,
                            }}>
                            <Button
                                buttonStyle={{
                                    width: '75%',
                                    marginVertical: 15,
                                    height: 35,
                                    backgroundColor: '#067062',
                                    borderRadius: 30,
                                    marginBottom: 20,
                                    shadowColor: '#067062',
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 0.37,
                                    shadowRadius: 7.49,
                                    elevation: 12,
                                }}
                                onPress={this.showDialogp}
                                titleStyle={{color: '#fff', fontFamily: 'Vazir-Black'}}
                                title="تغییر رمز عبور "
                            />
                            <Button
                                buttonStyle={{
                                    width: '75%',
                                    marginVertical: 15,
                                    height: 45,
                                    backgroundColor: '#067062',
                                    borderRadius: 30,
                                    marginBottom: 20,
                                    shadowColor: '#067062',
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 0.37,
                                    shadowRadius: 7.49,
                                    elevation: 12,
                                }}
                                onPress={this.UserUpdateRegistr}
                                titleStyle={{color: '#fff', fontFamily: 'Vazir-Black'}}
                                title="بروز رسانی"
                            />
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.dialoge}>
                    <DialogInput
                        dialogIsVisible={this.state.dialogVisiblepasword}
                        closeDialogInput={() => {
                            this.handleCancel(false);
                        }}
                        submitInput={(inputText) => {
                            this.UserRegisterpassword(inputText);
                        }}
                        // outerContainerStyle={{ backgroundColor: 'rgba(0,0,0, 0.75)' }}
                        containerStyle={{justifyContent: 'center', marginTop: 25}}
                        titleStyle={{color: '#47b03e', textAlign: 'center'}}
                        title="تغییر رمز"
                        subTitleStyle={{color: '#fff', textAlign: 'right', marginTop: 5}}
                        subtitle="تغییر رمز"
                        placeholderInput="رمز جدید "
                        placeholderTextColor="#777777"
                        textInputStyle={{marginTop: -20, textAlign: 'right'}}
                        secureTextEntry={true}
                        buttonsStyle={{borderColor: 'white'}}
                        textCancelStyle={{color: '#067062', fontSize: 16}}
                        submitTextStyle={{color: '#067062', fontSize: 16}}
                        cancelButtonText="انصراف"
                        submitButtonText="ثبت"
                    />
                </View>
                <AwesomeAlert
                    show={this.state.showAlertSuccess}
                    showProgress={false}
                    // title="اطلاعات  را به طور کامل وارد نمائید"
                    message={this.state.textMessageBox}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    titleStyle={{fontSize: 14, fontFamily: 'IRANSansMobile(FaNum)'}}
                    messageStyle={{fontSize: 15, fontFamily: 'IRANSansMobile(FaNum)'}}
                    confirmText="بله"
                    confirmButtonColor="#3d933c"
                    confirmButtonStyle={{}}
                    confirmButtonTextStyle={{
                        fontSize: 17,
                        fontFamily: 'IRANSansMobile(FaNum)',
                    }}
                    onConfirmPressed={() => {
                        this.hideAlertSuccess();
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#067062',
    },

    vakil: {
        color: '#067062',
        marginTop: -40,
        fontSize: 20,
        fontFamily: 'Lalezar-Regular',
    },
    // ...........کارد اصلی...........
    card1: {
        width: '100%',
        marginTop: 20,
        alignSelf: 'center',
        height: 500,

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
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
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
        marginTop: 10,
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
});

const mapStateToProps = (state) => {
    return {
        dataLogin: state.loginUser.dataLogin,
    };
};
export default connect(mapStateToProps)(UserProfile);
