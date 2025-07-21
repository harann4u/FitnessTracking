import { Input } from "../../../../components/shared/AuthForm.styles"
import type { UserDetailsType } from "../../../../store/slice/userDetails/userDetailsSlice"
import type { FormData } from "../FormData"
import { FitenssInfoStyled } from "./fitnessProfile.styled"

type FitnessInfoProps = {
    data: FormData,
    updateFields: (fileds: Partial<UserDetailsType>) => void
}

const FitnessProfile = ({ data, updateFields }:FitnessInfoProps) => {
    return(
        <FitenssInfoStyled>
            <h2>Fitness Profile</h2>
            <Input
                type="text"
                placeholder="age"
                value={data.age ?? ""}
                onChange={(e) => updateFields({ age:Number(e.target.value)  })}
            />
            <Input
                type="text"
                placeholder="height"
                value={data.height ?? ""}
                onChange={(e) => updateFields({ height:Number(e.target.value) })}
            />
            <Input
                type="text"
                placeholder="currentWeight"
                value={data.currentWeight ?? ""}
                onChange={(e) => updateFields({ currentWeight: Number(e.target.value) })}
            />
            <Input
                type="text"
                placeholder="GoalWeight"
                value={data.goalWeight ?? ""}
                onChange={(e) => updateFields({ goalWeight: Number(e.target.value)})}
            />
           
        </FitenssInfoStyled>
    )
}

export default FitnessProfile