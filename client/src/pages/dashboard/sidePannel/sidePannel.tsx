import React from "react"
import { SidePannelStyled } from "./SidePannel.styled"
import ProfileCard from "./profileCard/profileCard"
import PanelsButtonComponent from "./panelsButton/panelsButton"

const SidePannel = () => {
    return (
        <SidePannelStyled>
            <ProfileCard />
            <PanelsButtonComponent/>
        </SidePannelStyled>
    )
}

export default SidePannel