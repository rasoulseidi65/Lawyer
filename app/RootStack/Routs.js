
import {createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Splash from './Splash'
import Login from '../Auth/Login/LoginUser';
import Register from '../Auth/Register/RegisterLawyers';
import complete_info from '../Auth/Register/CompleteInfo';
import Attech from '../Auth/Register/Attech';
import Home from '../Layout/DashboardUser/Home';
import UserProfile from '../SharedModule/UserProfile';
import Setting from '../SharedModule/Setting';
import  DashboardUser from '../Layout/DashboardUser/DashboardUser';
import DetailsConsulate from '../Layout/DashboardUser/ScreensUser/Consultants/DetailsConsulate';
import Calculation from '../Layout/DashboardUser/ScreensUser/Judicialcalculations/Calculation';
import Diyat from '../Layout/DashboardUser/ScreensUser/Judicialcalculations/costLitigation';
import Dowry from '../Layout/DashboardUser/ScreensUser/Judicialcalculations/Dowry';
import inheritance from '../Layout/DashboardUser/ScreensUser/Judicialcalculations/Inheritance';
import salary from '../Layout/DashboardUser/ScreensUser/Judicialcalculations/Salary';
import TaxStamp from '../Layout/DashboardUser/ScreensUser/Judicialcalculations/taxStamp';
import CostLitigation from '../Layout/DashboardUser/ScreensUser/Judicialcalculations/costLitigation';
import salaryLaw from '../Layout/DashboardUser/ScreensUser/Judicialcalculations/expertSalary';
import penalty from '../Layout/DashboardUser/ScreensUser/Judicialcalculations/lateFees';
import laws from '../Layout/DashboardUser/ScreensUser/LegalRules/setOfRules';
import DetailLaws from '../Layout/DashboardUser/ScreensUser/LegalRules/DetailsLaws';
import FormLawe from '../Layout/DashboardUser/ScreensUser/Forms/Formlaw';
import Declaration from '../screen/Announcement';
import Petition from '../Layout/DashboardUser/ScreensUser/Forms/Petition';
import News from '../Layout/DashboardUser/ScreensUser/News/Newss';
import Location from '../Layout/DashboardUser/ScreensUser/Judicialcenters/Location';
import Consultant from '../Layout/DashboardUser/ScreensUser/Consultants/Consultant';
import Payment from '../screen/Payment';
import Category_Consultant from '../Layout/DashboardUser/ScreensUser/Consultants/CategoryConsultant';
import VideoCall from '../screen/Chat/VideoCall';
import SendMessage from '../screen/Chat/SendMessage';
import Note from '../Layout/DashboardUser/ScreensUser/Note/Note';
import Index from '../Auth/Login';
import Share from '../SharedModule/Share';
import LoginUser from '../Auth/Login/LoginUser';
import RegisterUser from '../Auth/Register/RegisterUser';
import DashbordLaw from '../Layout/DashboardLawyer/DashbordLaw';

 const Rootstack = createStackNavigator({
        splash: {
            screen: Splash,
            navigationOptions: {
                headerShown: false
            },
        },
        login: {
            screen: Login,
            navigationOptions: {
                headerShown: false
            },
        },
        Register: {
            screen:Register,
            navigationOptions: {
                headerShown: false
            },
        },
      complete: {
            screen:complete_info,
            navigationOptions: {
                headerShown: false
            },
        },
       Attech: {
            screen:Attech,
            navigationOptions: {
                headerShown: false
            },
        },
      home: {
            screen:Home,
            navigationOptions: {
                headerShown: false
            },
        },
       user: {
            screen:UserProfile,
            navigationOptions: {
                headerShown: false
            },
        },
       setting: {
            screen:Setting,
            navigationOptions: {
                headerShown: false
            },
        },
       detai: {
            screen:DetailsConsulate,
            navigationOptions: {
                headerShown: false
            },
        },
        DashboardUser: {
            screen:DashboardUser,
            navigationOptions: {
                headerShown: false
            },
        },
        DashboardLaw: {
            screen:DashbordLaw,
            navigationOptions: {
                headerShown: false
            },
        },
        calculation: {
            screen:Calculation,
            navigationOptions: {
                headerShown: false
            },
        },
       diyat: {
            screen:Diyat,
            navigationOptions: {
                headerShown: false
            },
        },
        dowry: {
            screen:Dowry,
            navigationOptions: {
                headerShown: false
            },
        },
        salary: {
            screen:salary,
            navigationOptions: {
                headerShown: false
            },
        },
      inheritance: {
            screen:inheritance,
            navigationOptions: {
                headerShown: false
            },
        },
        stamp: {
            screen:TaxStamp,
            navigationOptions: {
                headerShown: false
            },
        },
        cost: {
            screen:CostLitigation,
            navigationOptions: {
                headerShown: false
            },
        },
       salaryLaw: {
            screen:salaryLaw,
            navigationOptions: {
                headerShown: false
            },
        },
        penalty: {
            screen:penalty,
            navigationOptions: {
                headerShown: false
            },
        },
       laws: {
            screen:laws,
            navigationOptions: {
                headerShown: false
            },
        },
        DetailLaws: {
            screen:DetailLaws,
            navigationOptions: {
                headerShown: false
            },
        },
       formlawe: {
            screen:FormLawe,
            navigationOptions: {
                headerShown: false
            },
        },
       declaration: {
            screen:Declaration,
            navigationOptions: {
                headerShown: false
            },
        },
        petition: {
            screen:Petition,
            navigationOptions: {
                headerShown: false
            },
        },
      news: {
            screen:News,
            navigationOptions: {
                headerShown: false
            },
        },
       location: {
            screen:Location,
            navigationOptions: {
                headerShown: false
            },
        },
        consultant: {
            screen:Consultant,
            navigationOptions: {
                headerShown: false
            },
        },
        detail: {
            screen:DetailsConsulate,
            navigationOptions: {
                headerShown: false
            },
        },
        payment: {
            screen:Payment,
            navigationOptions: {
                headerShown: false
            },
        },
        Category: {
            screen:Category_Consultant,
            navigationOptions: {
                headerShown: false
            },
        },
        videocall: {
            screen:VideoCall,
            navigationOptions: {
                headerShown: false
            },
        },
        sendmessage: {
            screen:SendMessage,
            navigationOptions: {
                headerShown: false
            },
        },
         note: {
             screen:Note,
             navigationOptions: {
                 headerShown: false
             },
         },
      sign: {
            screen:Index,
            navigationOptions: {
                headerShown: false
            },
        },
        loginuser: {
            screen:LoginUser,
            navigationOptions: {
                headerShown: false
            },
        },
        registeruser: {
            screen:RegisterUser,
            navigationOptions: {
                headerShown: false
            },
        },
       Share: {
            screen:Share,
            navigationOptions: {
                headerShown: false
            },
        },

    },
    {initialRouteName: "DashboardUser" }
    );

    export default createAppContainer(Rootstack);
