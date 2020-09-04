import {
  USER_MOBILE_CHANGED,
  USER_PASSWORD_CHANGED,
    USER_LOGIN_ATTEMP,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_GET_DATA,
  } from '../Type/TypeLoginUser';
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
export const userGetData = (text) => {
    return {
        type: USER_GET_DATA,
        payload: text
    }
}
export const loginOrdinaryUser = ({mobile, password, navigation}) => {
    return (dispatch) => {

        dispatch({type: USER_LOGIN_ATTEMP})
    fetch('http://194.5.175.25:3131/api/v1/loginUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile: mobile,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success === true) {
          userGetData('sddsd');
          loginSuccess(dispatch, navigation, responseJson.data);
        } else {
          Alert.alert('شماره تلفن یا رمز عبور اشتباه است')
          loginFail(dispatch, responseJson.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
const loginSuccess = (dispatch, navigation, data) => {

    dispatch({type: USER_LOGIN_SUCCESS,payload:data});
    const NavigationAction = NavigationActions.navigate({routeName: 'DashboardUser', params: {},})
    navigation.dispatch(NavigationAction);

}
const loginFail = (dispatch, error) => {
  dispatch({type: USER_LOGIN_FAIL, payload: error});
};
