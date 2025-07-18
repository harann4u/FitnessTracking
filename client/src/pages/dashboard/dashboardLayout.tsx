import { useSelector } from "react-redux";
import CardComponet from "./contentPannel/contentMainBox/cardComponents/cardComponent";
import QuoteHeader from "./contentPannel/contentMainBox/quoteHeaderComponents/quoteHeader";
import WorkoutChart from "./contentPannel/contentMainBox/workoutchartComponents/workoutChart";
import { ContentMainBoxStyled, ContentWorkoutHistoryStyled } from "./dashboard.styles";
import type { RootState } from "../../store/store";

const DashboardLaout = () => {
    const loginData = useSelector((state:RootState)=> state.loginInfo)
    console.log("loginData+++",loginData)
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