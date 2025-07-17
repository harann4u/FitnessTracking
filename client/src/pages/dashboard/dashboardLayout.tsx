import CardComponet from "./contentPannel/contentMainBox/cardComponents/cardComponent";
import QuoteHeader from "./contentPannel/contentMainBox/quoteHeaderComponents/quoteHeader";
import WorkoutChart from "./contentPannel/contentMainBox/workoutchartComponents/workoutChart";
import { ContentMainBoxStyled, ContentWorkoutHistoryStyled } from "./dashboard.styles";

const DashboardLaout = () => {
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