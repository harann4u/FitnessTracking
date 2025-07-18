import React from "react"
import { HeaderProfileStyled, ProfileWrapperStyled, StepperBoxStyled, StepperLineStyled, StepperStyled } from "./profileSetting.styled"
import { ProfileImage } from "../dashboard/sidePannel/profileCard/ProfileCard.styled"
import profilePic from '../../../public/profileImage.jpg'
import PersonalDetails from "./personalDetails/personalDetails"

const ProfileSetting = () => {
    const arr = [1, 2, 3, 4]
    return (
        <ProfileWrapperStyled>
            <HeaderProfileStyled>
                Create Your Profile
            </HeaderProfileStyled>
            <ProfileImage src={profilePic} alt="User profile" />
            <StepperBoxStyled>
                {arr.map((item, index) => (
                    <React.Fragment key={item}>
                        <StepperStyled>{item}</StepperStyled>
                        {index !== arr.length - 1 && <StepperLineStyled />}
                    </React.Fragment>
                ))}
            </StepperBoxStyled>
            <PersonalDetails/>
        </ProfileWrapperStyled>
    )
}

export default ProfileSetting