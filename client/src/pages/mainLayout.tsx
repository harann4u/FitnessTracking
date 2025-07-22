import { HeaderStyled, MainBoxPannelStyled, MainPageWrapperStyled, MainPannelStyled } from "./mainLayout.styled"
import SidePannel from "./dashboard/sidePannel/sidePannel"
import DashboardLaout from "./dashboard/dashboardLayout"
import MainHeader from "./mainHeader/mainHeader"
//  import Blogging from "./blogging/blogging"
// import ProfileSetting from "./profileSetting/profileSetting"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
// import WorkoutTracking from "./workoutTracking/workoutTracking"
// import GoalSetting from "./goalSetting/goalSetting"
import type { tabJsonState } from "../store/slice/tabJsonSlice"
import { lazy, Suspense } from "react"

const LazyBlogging = lazy(() => import('./blogging/blogging'))
const LazyProfileSetting = lazy(() => import('./profileSetting/profileSetting'))
const LazyworkoutTracking = lazy(() => import('./workoutTracking/workoutTracking'))
const LazyGoalSetting = lazy(() => import('./goalSetting/goalSetting'))



const MainLayout = () => {
    const tabArr = useSelector((state: RootState) => state.tab)
    const tab = tabArr?.filter((item: tabJsonState) => item.isIn)
    return (
        <MainPageWrapperStyled>
            <HeaderStyled>
                <MainHeader />
            </HeaderStyled>
            <MainPannelStyled>
                <SidePannel />
                  {/* <MainBoxPannelStyled>
                    {tab[0].id == 0 && <DashboardLaout/> }
                    {tab[0].id == 2 && <WorkoutTracking/>}
                    {tab[0].id == 1 && <ProfileSetting/>}
                    {tab[0].id == 3 && <GoalSetting/>}
                    {tab[0].id == 4 && <Blogging/>}
                </MainBoxPannelStyled> */}
                <MainBoxPannelStyled>
                    {tab[0].id == 0 && <DashboardLaout />}
                    {tab[0].id == 2 && <Suspense fallback={<div>...Loading Bloggings</div>}><LazyworkoutTracking /></Suspense>}
                    {tab[0].id == 1 && <Suspense fallback={<div>...Loading Bloggings</div>}><LazyProfileSetting /></Suspense>}
                    {tab[0].id == 3 && <Suspense fallback={<div>...Loading Bloggings</div>}> <LazyGoalSetting /></Suspense>}
                    {tab[0].id == 4 && <Suspense fallback={<div>...Loading Bloggings</div>}><LazyBlogging /></Suspense>}
                </MainBoxPannelStyled>
            </MainPannelStyled>
        </MainPageWrapperStyled>
    )
}

export default MainLayout