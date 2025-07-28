import { ProfileButton, ProfileCardWrapper, ProfileImage, ProfileName } from "./ProfileCard.styled"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../../../store/store"
import { tabSelectionChange } from "../../../../store/slice/tabJsonSlice"
import profileImage from '../../../../assets/profileImage.jpg';


const ProfileCard = () => {
  const disPatch = useDispatch<AppDispatch>()
  return (
    <ProfileCardWrapper>
      <ProfileImage src={profileImage} alt="User profile" />
      <ProfileName>Hariharan</ProfileName>
      <ProfileButton onClick={() => disPatch(tabSelectionChange({
        name: 'Profile Setting',
        id: 1,
        isIn: false
      }))}>Profile Setting</ProfileButton>
    </ProfileCardWrapper>
  )
}

export default ProfileCard