import {Routes,Route} from 'react-router-dom'
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'
import MainLayout from '../pages/mainLayout'
import DashboardLaout from '../pages/dashboard/dashboardLayout'
import ProfileSetting from '../pages/profileSetting/profileSetting'


const AppRoutes = ()=> {
    return(
        <Routes>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/signup' element = {<Signup/>}/>
            <Route path = '/admin' element = {<MainLayout/>}/>
            <Route path = '/dashboard' element = {<DashboardLaout/>}/>
            <Route path = '/profileSetting' element = {<ProfileSetting/>}/>
        </Routes>
    )
}

export default  AppRoutes