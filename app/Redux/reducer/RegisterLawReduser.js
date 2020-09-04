import
{
    FIRSTNAME_CHANGED,
    LASTNAME_CHANGED,
    FATHERNAME_CHANGED,
    NATIONALCODE_CHANGED,
    IDNUM_CHANGED,
    GENDER_CHANGED,
    ADDRESS_CHANGED,
    MOBILE_CHANGED,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    TYPEEMPLOYE_CHANGED,
    DEGRE_CHANGED,
    DATALAWYERLICENSE_CHANGED,
    WORKEXPERIENCE_CHANGED,
    PHONENUMBER_CHANGED,
    IMAGE_CHANGED,
    RESUME_CHANGED,
    LAWYERNOTEBOOK_CHANGED,
    LAWYERLICENSE_CHANGED,
    LAWER_Register_ATTEMP,
    LAWER_Register_SUCCESS,
    LAWER_Register_FAIL,

} from '../Type/TypeRegister';

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    fatherName:'',
    nationalCode:'',
    idNum:'',
    gender:'',
    address:'',
    mobile: '',
    email:'',
    password: '',
    typeEmployee:'',
    degree:'',
    dateLawyerLicense:'',
    workExperience:'',
    phoneNumber:'',
    image:'',
    resume:'',
    lawyerNotebook:'',
    lawyerLicense:'',
    loading: false,
    success:'',
    error: '',
}
export default (state = INITIAL_STATE, action) => {
    // console.log(action);
    switch (action.type) {
        case FIRSTNAME_CHANGED:
            return {...state, firstName: action.payload};
            break;
        case LASTNAME_CHANGED:
            return {...state, lastName: action.payload};
            break;
        case FATHERNAME_CHANGED:
            return {...state, fatherName: action.payload};
            break;
        case  NATIONALCODE_CHANGED:
            return {...state, nationalCode: action.payload};
            break;
        case IDNUM_CHANGED:
            return {...state, idNum: action.payload};
            break;
        case GENDER_CHANGED:
            return {...state, gender: action.payload};
            break;
            case ADDRESS_CHANGED:
                return {...state, address: action.payload};
                break;
        case MOBILE_CHANGED:
            return {...state, mobile: action.payload};
            break;

        case EMAIL_CHANGED:
            return {...state, email: action.payload};
            break;
            case PASSWORD_CHANGED:
                return {...state, password: action.payload};
                break;
        case TYPEEMPLOYE_CHANGED:
            return {...state, typeEmployee: action.payload};
            break;
        case DEGRE_CHANGED:
            return {...state, degree: action.payload};
            break;
        case  DATALAWYERLICENSE_CHANGED:
            return {...state, dateLawyerLicense: action.payload};
            break;

        case WORKEXPERIENCE_CHANGED:
            return {...state, workExperience: action.payload};
            break;

            case PHONENUMBER_CHANGED:
                return {...state,  phoneNumber: action.payload};
                break;
        case IMAGE_CHANGED:
            return {...state,image: action.payload};
                    break;
        case RESUME_CHANGED:
           return {...state,resume: action.payload};
             break;
        case LAWYERNOTEBOOK_CHANGED:
          return {...state,lawyerNotebook: action.payload};
           break;
           case LAWYERLICENSE_CHANGED:
            return {...state,lawyerLicense: action.payload};
             break;
        case LAWER_Register_ATTEMP:
            return {...state, loading: true};
            break;
        case LAWER_Register_SUCCESS:
            return {...state, success:true};
            break;
        case LAWER_Register_FAIL:
            return {...state, loading: false,password: '', error: 'نام کاربری اشتباه ست'};
            break;
            default:
            return state;

    }
}
