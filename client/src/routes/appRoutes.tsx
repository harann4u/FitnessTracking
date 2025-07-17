import {Routes,Route} from 'react-router-dom'
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'
import DashboardLaout from '../pages/dashboard/dashboardLayout'
import ProfileSetting from '../pages/profileSetting/profileSetting'
import MainLayout from '../pages/mainLayout'


const AppRoutes = ()=> {
    return(
        <Routes>
            <Route path = '/' element = {<Login/>}/>
            <Route path = '/signup' element = {<Signup/>}/>
            <Route path = '/admin' element = {<MainLayout/>}/>
            <Route path = '/dashboard' element = {<DashboardLaout/>}/>
            <Route path = '/profileSetting' element = {<ProfileSetting/>}/>
        </Routes>
    )
}

export default  AppRoutes