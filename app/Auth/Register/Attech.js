import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity, Alert, ScrollView, ImageBackground, StatusBar, TextInput, Dimensions,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';
import RNFetchBlob from 'rn-fetch-blob';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faFileImage, faInfo, faInfoCircle, faTimes, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {Avatar, Card, Switch, Title, Paragraph, Dialog, Portal, Divider} from 'react-native-paper';
import {connect} from 'react-redux';
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
    typeEmployeChanged,
    degreChanged,
    dateLawyerLicenseChanged,
    workExperienceChanged,
    phoneNumberChanged,
    imageChanged,
    resumeChanged,
    lawyerNotBookChanged,
    lawyerLicenseChanged,
    registerLawyer,
} from '../../Redux/action/RegisterLawAction';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//................icons....................................

class Attech extends Component {
    constructor(props) {
        super(props);
        this.state = {

            ImageSourcepersonal: null,
            ImageSourcelawyerNotbook: null,
            ImageSourcelawyerLicense: null,
            ImageDatapersonal: null,
            ImageDatalawyerNotbook: null,
            ImageDatalawyerLicense: null,
            path: null,
            showAlert: false,
        };
        // alert(this.props.firstName)
    }


    SelectPhotopersonal() {
        const options = {
            title: 'عکس پرسنلی خود را انتخاب کنید',
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
                        {name: 'image', type: 'image/png', filename: response.fileName, data: response.data},
                    ],
                )
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.success === true) {
                            console.log(responseJson.imagePath);
                        }
                        this.props.imageChanged(responseJson.imagePath);

                    })
                    .done();

            }
        });
    }

    SelectPhotolawyerNotbook() {
        const options = {
            title: 'تصویر دفترچه وکالت خود را انتخاب کنید',
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
                    ImageSourcelawyerNotbook: source,
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
                        {name: 'image', type: 'image/png', filename: response.fileName, data: response.data},
                    ],
                )
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.success === true) {
                            console.log(responseJson.imagePath);
                        }
                        this.props.lawyerNotBookChanged(responseJson.imagePath);

                    })
                    .done();

            }
        });
    }

    SelectPhotolawyerLicense() {
        const options = {
            title: 'تصویر پروانه وکالت یا کاراموزی را انتخاب کنید',
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
                    ImageSourcelawyerLicense: source,
                    //  ImageDatalawyerNotbook: response.data
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
                        // element with property `filename` will be transformed into `file` in form data
                        {name: 'image', type: 'image/png', filename: response.fileName, data: response.data},
                    ],
                )
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.success === true) {
                            console.log(responseJson.imagePath);
                        }
                        // this.setState({ imagepathlawyerlicense: response.data['path']});
                        this.props.lawyerLicenseChanged(responseJson.imagePath);
                    })
                    .done();

            }
        });
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

    onRegisterLawyer() {
        //const {navigation}=this.props;
        const {
            firstName,
            lastName,
            fatherName,
            nationalCode,
            idNum,
            gender,
            address,
            mobile,
            email,
            password,
            typeEmployee,
            degree,
            dateLawyerLicense,
            workExperience,
            phoneNumber,
            image,
            resume,
            lawyerNotebook,
            lawyerLicense,
            navigation,
        } = this.props;

        if (this.state.ImageSourcepersonal === null) {


            this.setState({message: 'عکس  پرسنلی را وارد کنید'});
            this.showAlert();
        } else if (this.state.ImageSourcelawyerNotbook === null) {
            this.setState({message: 'تصویر دفترچه وکالت را ئارد کنید'});
            this.showAlert();
        } else if (this.state.ImageSourcelawyerLicense === null) {
            this.setState({message: 'تصویر دفترچه وکالت را ئارد کنید'});
            this.showAlert();
        } else {
            this.props.registerLawyer({
                firstName,
                lastName,
                fatherName,
                nationalCode,
                idNum,
                gender,
                address,
                mobile,
                email,
                password,
                typeEmployee,
                degree,
                dateLawyerLicense,
                workExperience,
                phoneNumber,
                image,
                resume,
                lawyerNotebook,
                lawyerLicense,
                navigation,

            });
            if (this.props.success === true) {

            }
        }
    }

    render() {
        const image = this.state;
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
                        <Icon name="arrow-right" color="#fff" size={20}/>
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
                        marginTop: 20,
                        fontSize: 16,
                        fontFamily: 'Vazir-Black',
                    }}>
                    عکس و مدارک خود را بارگذاری کنید
                </Text>
                <ScrollView style={styles.card1}>
                    <View style={styles.card2}>
                        <View style={{
                            borderColor: '#067062',
                            borderWidth: 1,
                            borderRadius: 10,
                            marginHorizontal: 25,
                            marginVertical: 15,
                        }}>
                            <View style={{flex: 1}}>
                                <Text style={styles.text1
                                }>
                                    عکس پرسنلی
                                </Text>
                            </View>

                            <View style={{height: 160, marginTop: 20, flex: 13, flexDirection: 'row'}}>
                                <TouchableOpacity onPress={this.SelectPhotopersonal.bind(this)} style={styles.toch}
                                >
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Icon name='image' size={30}
                                              style={{marginTop: 10, color: '#fff', alignSelf: 'center'}}

                                        />
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                fontFamily: 'Vazir-Black',
                                                fontSize: 12,
                                                color: '#fff',
                                                marginTop: 2,

                                                // backgroundColor: '#de481e',
                                            }}>
                                            انتخاب عکس </Text>
                                    </View>

                                </TouchableOpacity>
                                <View style={styles.viewimage}>
                                    <Image source={this.state.ImageSourcepersonal}
                                           style={styles.image}


                                    />

                                </View>
                            </View>
                        </View>
                        <View style={{
                            borderColor: '#067062',
                            borderWidth: 1,
                            borderRadius: 10,
                            marginHorizontal: 25,
                            marginVertical: 15,
                        }}>
                            <View style={{flex: 1}}>
                                <Text style={styles.text1
                                }>
                                    صفحه اول دفترچه وکالت
                                </Text>
                            </View>

                            <View style={{height: 160, marginTop: 20, flex: 13, flexDirection: 'row'}}>
                                <TouchableOpacity onPress={this.SelectPhotolawyerNotbook.bind(this)} style={styles.toch}
                                >
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Icon name='image' size={30}
                                              style={{marginTop: 10, color: '#fff', alignSelf: 'center'}}

                                        />
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                fontFamily: 'Vazir-Black',
                                                fontSize: 12,
                                                color: '#fff',
                                                marginTop: 2,

                                                // backgroundColor: '#de481e',
                                            }}>
                                            انتخاب عکس </Text>
                                    </View>

                                </TouchableOpacity>
                                <View style={styles.viewimage}>
                                    <Image source={this.state.ImageSourcelawyerNotbook}
                                           style={styles.image}


                                    />

                                </View>
                            </View>
                        </View>
                        <View style={{
                            borderColor: '#067062',
                            borderWidth: 1,
                            borderRadius: 10,
                            marginHorizontal: 25,
                            marginVertical: 15,
                        }}>
                            <View style={{flex: 1}}>
                                <Text style={styles.text1
                                }>
                                    عکس پروانه وکالت یا کارآموزی وکالت
                                </Text>
                            </View>

                            <View style={{height: 160, marginTop: 20, flex: 13, flexDirection: 'row'}}>
                                <TouchableOpacity onPress={this.SelectPhotolawyerLicense.bind(this)} style={styles.toch}
                                >
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Icon name='image' size={30}
                                              style={{marginTop: 10, color: '#fff', alignSelf: 'center'}}

                                        />
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                fontFamily: 'Vazir-Black',
                                                fontSize: 12,
                                                color: '#fff',
                                                marginTop: 2,

                                                // backgroundColor: '#de481e',
                                            }}>
                                            انتخاب عکس </Text>
                                    </View>

                                </TouchableOpacity>
                                <View style={styles.viewimage}>
                                    <Image source={this.state.ImageSourcelawyerLicense}
                                           style={styles.image}


                                    />

                                </View>
                            </View>
                        </View>
                        <View style={{
                            borderColor: '#067062',
                            borderWidth: 1,
                            borderRadius: 10,
                            marginHorizontal: 25,
                            marginVertical: 15,
                        }}>
                            <View style={{flex: 1}}>
                                <Text style={styles.text1
                                }>
                                    رزومه به صورت pdf
                                </Text>
                            </View>

                            <View style={{height: 160, marginTop: 20, flex: 13, flexDirection: 'row'}}>
                                <TouchableOpacity style={styles.toch}
                                >
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Icon name="file-pdf-o" size={30}
                                              style={{marginTop: 10, color: '#fff', alignSelf: 'center'}}

                                        />
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                fontFamily: 'Vazir-Black',
                                                fontSize: 12,
                                                color: '#fff',
                                                marginTop: 2,

                                                // backgroundColor: '#de481e',
                                            }}>
                                            ارسال </Text>
                                    </View>

                                </TouchableOpacity>
                                <View style={styles.viewimage}>


                                </View>
                            </View>
                        </View>


                        <Button
                            buttonStyle={{
                                marginHorizontal: 30,
                                height: 45,
                                backgroundColor: '#067062',
                                borderRadius: 30,
                                shadowColor: '#067062',
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
                            //  onPress={() => this.props.navigation.navigate('login')}
                            titleStyle={{color: '#fff', fontFamily: 'Vazir-Black'}}
                            title=" ذخیره اطلاعات"
                        />
                    </View>
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
                        titleStyle={{fontSize: 16, fontFamily: 'Vazir-Black', color: '#333'}}
                        messageStyle={{fontSize: 14, fontFamily: 'Vazir-Black', color: '#333'}}
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
        marginTop: -40, fontSize: 20,
        fontFamily: 'Lalezar-Regular',

    },
    // ...........کارد اصلی...........
    card1: {
        width: '100%',
        marginTop: 20,
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
        width: '100%',
        marginTop: 20,
        alignSelf: 'center',


        shadowColor: '#3d933c',
        backgroundColor: '#fff',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
    },
    headerContent: {

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
    textstyle: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        marginBottom: 18,
    },

    textsabt: {

        // marginTop:5,
        fontSize: 14,
        color: '#555',
        fontFamily: 'Vazir-Black',

    },

    text: {
        fontSize: 14,
        color: '#333',
        fontFamily: 'Vazir-Black',

    },




    towSelect: {
        backgroundColor: '#e2e2e2',
        height: 50, width: '95%',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 70,
    },

    ViewStyle1: {

        backgroundColor: '#fff',
        height: 130,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 70,
        shadowOpacity: 0.9,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 100,
        shadowOffset: {
            width: 20,
            height: 5,
        },
    },
    ViewStyle: {

        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    view2: {
        backgroundColor: '#9FC1BC',
        height: 180, width: '100%',
        borderRadius: 10,

    },
    view3: {
        backgroundColor: '#067062',
        height: 40,
        width: 150,
        marginTop: 10,
        borderRadius: 70,
    },
    textview: {
        color: '#fff', marginRight: 12, fontFamily: 'Vazir-Black', fontSize: 12,
    },
    IconStyle1: {
        color: '#fff',
        marginLeft: 20,
        marginTop: -15,

    },
// ...........
    toch: {
        flex: 4,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 4,
        borderWidth: 1,
        borderColor: '#067062',
        marginTop: 25,
        backgroundColor: '#067062',

        width: 160,
        height: 80,
        justifyContent: 'center', alignItems: 'center',
    },
    text1: {
        fontSize: 15,
        paddingVertical: 5,
        fontFamily: 'Vazir-Black',
        backgroundColor: '#067062',
        color: '#fff',
        textAlign: 'center',
        borderRadius: 5,
    },
    viewimage: {
        height: 140,
        marginRight: 15,
        flex: 9,
        marginHorizontal: 5,
        borderColor: '#067062',
        borderStyle: 'dotted',
        borderWidth: 2,
        borderRadius: 10,
    },
    image: {
        borderRadius: 10,
        //  marginLeft: 4,
        //  marginRight: 4,
        //marginTop: 2,
        marginBottom: 2,
        width: 185,
        height: 137,
        resizeMode: 'cover',
    },

});
mapStateToProps = state => {
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
        typeEmployee: state.auth.typeEmployee,
        degree: state.auth.degree,
        dateLawyerLicense: state.auth.dateLawyerLicense,
        workExperience: state.auth.workExperience,
        phoneNumber: state.auth.phoneNumber,
        image: state.auth.image,
        resume: state.auth.resume,
        lawyerNotebook: state.auth.lawyerNotebook,
        lawyerLicense: state.auth.lawyerLicense,
        loading: state.auth.loading,
        error: state.auth.error,
    };
};


export default connect(mapStateToProps, {
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
    typeEmployeChanged,
    degreChanged,
    dateLawyerLicenseChanged,
    workExperienceChanged,
    phoneNumberChanged,
    imageChanged,
    resumeChanged,
    lawyerNotBookChanged,
    lawyerLicenseChanged,
    registerLawyer

})

(
    Attech
)
;
