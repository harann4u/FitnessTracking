import LeftHeader from "./leftHeader/leftHeader"
import { LeftSideBoxStyled, RightSideBoxStyled } from "./mainHeader.styled"
import RightHeader from "./rightHeader/rightHeader"

const MainHeader = () => {
    return (
        <>
            <LeftSideBoxStyled> 
                <LeftHeader/>
            </LeftSideBoxStyled>
            <RightSideBoxStyled>
                <RightHeader/>
            </RightSideBoxStyled>
        </>
    )
}

export default MainHeader