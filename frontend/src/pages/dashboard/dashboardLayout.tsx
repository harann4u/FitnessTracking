import { useSelector } from "react-redux";
import CardComponet from "./contentPannel/contentMainBox/cardComponents/cardComponent";
import QuoteHeader from "./contentPannel/contentMainBox/quoteHeaderComponents/quoteHeader";
import WorkoutChart from "./contentPannel/contentMainBox/workoutchartComponents/workoutChart";
import { ContentMainBoxStyled, ContentWorkoutHistoryStyled } from "./dashboard.styles";
import type { RootState } from "../../store/store";

const DashboardLaout = () => {
    const loginData = useSelector((state:RootState)=> state.loginInfo)
    const userData = useSelector((state:RootState)=> state.userDetails)
    console.log("loginData+++",loginData.loginInfo)
    console.log("userData++",userData.user)
    return (
         <>
            <ContentMainBoxStyled>
                <QuoteHeader />
                <CardComponet />
                <WorkoutChart />
            </ContentMainBoxStyled>
            <ContentWorkoutHistoryStyled>Workout History</ContentWorkoutHistoryStyled>
        </>
    )
}

export default DashboardLaout