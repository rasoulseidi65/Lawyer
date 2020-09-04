import {
    USER_MOBILE_CHANGED,
    USER_PASSWORD_CHANGED,
    USER_REGISTER_ATTEMP,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS
} from '../Type/TypeRegisterUser';
import {NavigationActions} from 'react-navigation';
import { Alert } from 'react-native';

export const mobileChanged = (text) => {
    return {
        type: USER_MOBILE_CHANGED,
        payload: text
    }
}
export const passwordChanged = (text) => {
    return {
        type: USER_PASSWORD_CHANGED,
        payload: text
    }
}
// export const findUser = ({mobile,password,navigation}) => {
//     return (dispatch) => {
//         dispatch({type: USER_REGISTER_ATTEMP})
//         fetch('http://194.5.175.25:2000/api/v1/findmobile', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 mobile: mobile,

//             }),
//         }).then((response) => response.json()).then((responseJson) => {
//             console.log(responseJson)
//             if (responseJson.success === false) {
//                 registerUserSuccess(dispatch, navigation,mobile);
//                 this.props.navigation.navigate('SendMessage',{mobile:mobile,password:password})

//             } else {
//                 registerUserFail(dispatch,responseJson.data);
//             }
//         }).catch((error) => {
//             console.error('yyy');
//         });
//     }

// }
export const registerUser = ({mobile, password, navigation}) => {
    return (dispatch) => {

        dispatch({type: USER_REGISTER_ATTEMP})
        fetch('http://194.5.175.25:3131/api/v1/registerUser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mobile: mobile,
                password: password,
            }),
        }).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            if (responseJson.success === true) {
                registerUserSuccess(dispatch, navigation,mobile);
            } else {
                Alert.alert('شماره تلفن تکراری است')
                registerUserFail(dispatch,responseJson.data);
            }
        }).catch((error) => {
            console.error('yyy');
        });
    }

}
const registerUserSuccess = (dispatch, navigation,mobile) => {
    dispatch({type: USER_REGISTER_SUCCESS});
    const NavigationAction = NavigationActions.navigate({
        routeName:'loginuser',
        params: {mobile}
    })
   navigation.dispatch(NavigationAction);


}
const registerUserFail = (dispatch,error) => {
    dispatch({type: USER_REGISTER_FAIL,payload:error})
}
