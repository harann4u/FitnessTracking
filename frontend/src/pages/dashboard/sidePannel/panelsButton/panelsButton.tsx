import { useDispatch, useSelector } from "react-redux"
import { PanelButtonStyled, PanelWrapper } from "./PanelButton.styled"
import type { AppDispatch, RootState } from "../../../../store/store"
import { tabSelectionChange, type tabJsonState } from "../../../../store/slice/tabJsonSlice"

const PanelsButtonComponent = () => {
    const tabArr = useSelector((state:RootState)=> state.tab)
    const disPatch = useDispatch<AppDispatch>()

    console.log('tabArr',tabArr)
    return(
        <PanelWrapper>
            {tabArr.map((item:tabJsonState)=>(
                 <PanelButtonStyled key = {item.name} onClick={()=> disPatch(tabSelectionChange(item))} isActive = {item.isIn}>{item.name}</PanelButtonStyled>
            ))}
        </PanelWrapper>
    )
}

export default PanelsButtonComponent