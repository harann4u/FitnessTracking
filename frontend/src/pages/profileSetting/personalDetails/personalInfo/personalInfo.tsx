import { Input } from "../../../../components/shared/AuthForm.styles"
import type { UserDetailsType } from "../../../../store/slice/userDetails/userDetailsSlice"
import type { FormData } from "../FormData"
import { PeronalInfoWrapper } from "./personalInfo.styled"

type PersonalInfoProps = {
    data: FormData,
    updateFields: (fileds: Partial<UserDetailsType>) => void
}

const PersonalInfo = ({ data, updateFields }: PersonalInfoProps) => {
    return (
        <PeronalInfoWrapper>
            <h2>Personal Info</h2>
            <Input
                type="text"
                placeholder="FullName"
                value={data.fullName}
                onChange={(e) => updateFields({ fullName: e.target.value })}
            />
            <Input
                type="text"
                placeholder="Email"
                value={data.email}
                onChange={(e) => updateFields({ email: e.target.value })}
            />
          
            <Input
                type="text"
                placeholder="Password"
                value={data.password}
                onChange={(e) => updateFields({ password: e.target.value })}
            />
              <Input
                type="text"
                placeholder="PhoneNumber"
                value={data.phoneNumber}
                onChange={(e) => updateFields({ phoneNumber:e.target.value  })}
            />
           
        </PeronalInfoWrapper>
    )
}

export default PersonalInfo