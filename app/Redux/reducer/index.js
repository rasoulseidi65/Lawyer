import {combineReducers} from 'redux';
import AuthLawerReducer from './RegisterLawReduser';
import LoginUserReducer from './LoginUserReducer';
import LoginOrdinaryReducer from './LoginOrdinaryUserReducer';
import RegisterOrdinaryReducer from './RegisterOrdinaryUserReducer';

export default combineReducers({
    auth:AuthLawerReducer,
    loginUser:LoginUserReducer,
    loginOrdinaryUser:LoginOrdinaryReducer,
  registerOrdinaryUser:RegisterOrdinaryReducer

})

