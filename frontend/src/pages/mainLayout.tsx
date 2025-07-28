import { HeaderStyled, MainBoxPannelStyled, MainPageWrapperStyled, MainPannelStyled } from "./mainLayout.styled"
import SidePannel from "./dashboard/sidePannel/sidePannel"
import DashboardLaout from "./dashboard/dashboardLayout"
import MainHeader from "./mainHeader/mainHeader"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import type { tabJsonState } from "../store/slice/tabJsonSlice"
import { lazy, Suspense } from "react"
import WithUserRole from "../hoc/withUserRole"
// import UserDetails from "./userDetails/userDeatils"

const LazyBlogging = lazy(() => import('./blogging/blogging'))
const LazyProfileSetting = lazy(() => import('./profileSetting/profileSetting'))
const LazyworkoutTracking = lazy(() => import('./workoutTracking/workoutTracking'))
const LazyGoalSetting = lazy(() => import('./goalSetting/goalSetting'))
const LazyUserDetails = lazy(()=> import('./userDetails/userDeatils'))


const MainLayout = () => {
    const tabArr = useSelector((state: RootState) => state.tab)
    const tab = tabArr?.filter((item: tabJsonState) => item.isIn)
    const AuthBasedComponent = WithUserRole(LazyUserDetails)
    return (
        <MainPageWrapperStyled>
            <HeaderStyled>
                <MainHeader />
            </HeaderStyled>
            <MainPannelStyled>
                <SidePannel />
                <MainBoxPannelStyled>
                    {tab[0].id == 0 && <DashboardLaout />}
                    {tab[0].id == 2 && <Suspense fallback={<div>...Loading Bloggings</div>}><LazyworkoutTracking /></Suspense>}
                    {tab[0].id == 1 && <Suspense fallback={<div>...Loading Bloggings</div>}><LazyProfileSetting /></Suspense>}
                    {tab[0].id == 3 && <Suspense fallback={<div>...Loading Bloggings</div>}> <LazyGoalSetting /></Suspense>}
                    {tab[0].id == 4 && <Suspense fallback={<div>...Loading Bloggings</div>}><LazyBlogging /></Suspense>}
                    {tab[0].id == 5 && <Suspense fallback={<div>...Loading User Details</div>}><AuthBasedComponent /></Suspense>}
                </MainBoxPannelStyled>
            </MainPannelStyled>
        </MainPageWrapperStyled>
    )
}

export default MainLayout