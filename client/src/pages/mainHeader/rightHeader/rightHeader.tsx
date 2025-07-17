import React, { useState } from "react"
import { ProfileHeaderImageStyled } from "./rightHeader.Styled"
import profilePic from '../../../../public/profileImage.jpg'


const RightHeader = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
    return (
        <>
            <ProfileHeaderImageStyled src={profilePic} alt="User profile" />
        </>
    )
}

export default RightHeader