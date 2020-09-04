import {USER_MOBILE_CHANGED, USER_PASSWORD_CHANGED, USER_REGISTER_ATTEMP, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS} from '../Type/TypeRegisterUser';
const INITIAL_STATE={
    mobile:'',
    password:'',
    loading:false,
    error:'',
    success:false
}
export default(state=INITIAL_STATE,action) =>{
  console.log(action);
    switch (action.type) {
        case USER_MOBILE_CHANGED:
            return{...state,mobile:action.payload };
            break;
        case USER_PASSWORD_CHANGED:
            return{...state,password:action.payload };
            break;
        case USER_REGISTER_ATTEMP:
            return{...state,loading:true};
            break;
        case USER_REGISTER_SUCCESS:
            return{...state,success: true};
            break;
        case USER_REGISTER_FAIL:
            return{...state,loading:false,mobile:'',error:action.payload};
            break;
        default:
            return state;

    }
}
