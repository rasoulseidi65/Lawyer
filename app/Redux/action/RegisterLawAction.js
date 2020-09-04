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

export const  firstNameChanged = (text) => {
    return {
        type: FIRSTNAME_CHANGED,
        payload: text
    }
}
export const lastNameChanged = (text) => {
    return {
        type: LASTNAME_CHANGED,
        payload: text
    }
}
export const fatherNameChanged = (text) => {
    return {
        type:  FATHERNAME_CHANGED,
        payload: text
    }
}
export const nationalCodeChanged = (text) => {
    return {
        type:NATIONALCODE_CHANGED,
        payload: text
    }
}
export const idNumChanged = (text) => {
    return {
        type: IDNUM_CHANGED,
        payload: text
    }
}
export const genderChanged = (text) => {
    return {
        type: GENDER_CHANGED,
        payload: text
    }
}
export const addressChanged = (text) => {
    return {
        type: ADDRESS_CHANGED,
        payload: text
    }
}
export const mobileChanged = (text) => {
    return {
        type: MOBILE_CHANGED,
        payload: text
    }
}
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const typeEmployeChanged = (text) => {
    return {
        type: TYPEEMPLOYE_CHANGED,
        payload: text
    }
}

export const degreChanged = (text) => {
    return {
        type: DEGRE_CHANGED,
        payload: text
    }
}
export const dateLawyerLicenseChanged = (text) => {
    return {
        type: DATALAWYERLICENSE_CHANGED,
        payload: text
    }
}
export const workExperienceChanged = (text) => {
    return {
        type: WORKEXPERIENCE_CHANGED,
        payload: text
    }
}
export const phoneNumberChanged = (text) => {
    return {
        type:  PHONENUMBER_CHANGED,
        payload: text
    }
}

export const imageChanged = (text) => {
    return {
        type: IMAGE_CHANGED,
        payload: text
    }
}
export const resumeChanged = (text) => {
    return {
        type: RESUME_CHANGED,
        payload: text
    }
}
export const lawyerNotBookChanged = (text) => {
    return {
        type:  LAWYERNOTEBOOK_CHANGED,
        payload: text
    }
}
export const lawyerLicenseChanged = (text) => {
    return {
        type: LAWYERLICENSE_CHANGED,
        payload: text
    }
}
export const registerLawyer = ({
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
navigation
}) => {
    return (dispatch) => {
        dispatch({type:  LAWER_Register_ATTEMP});
        fetch('http://194.5.175.25:3131/api/v1/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
     firstName: firstName,
    lastName:lastName,
    fatherName:fatherName,
    nationalCode:nationalCode,
    idNum:idNum,
    gender: gender,
    address:address,
    mobile:mobile,
     email:email,
    password:password,
    typeEmployee:typeEmployee,
    degree:degree,
    dateLawyerLicense:dateLawyerLicense,
    workExperience:workExperience,
    phoneNumber:phoneNumber,
    image:image,
    resume:resume,
    lawyerNotebook:lawyerNotebook,
    lawyerLicense:lawyerLicense,


            }),
        }).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            if (responseJson.success) {
                RegisterLawyerSuccess(dispatch,navigation);
            } else {
                RegisterLawyerFail(dispatch);
            }
        }).catch((error) => {
            console.error(error);
        });


    }

}
const RegisterLawyerSuccess = (dispatch,navigation) => {
    dispatch({type:LAWER_Register_SUCCESS});
    const navigationAction= navigation.navigate({
        routeName:'login',
        params:{},
    })
   navigation.dispatch(navigationAction);
}
const RegisterLawyerFail = (dispatch) => {
    dispatch({type: LAWER_Register_FAIL})
}
// 3127345
