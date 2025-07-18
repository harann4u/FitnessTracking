import type { FormData } from "../FormData"
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { PerferenceWrapperStyled } from "./perference.styled";


type PerferenceProps = {
    data: FormData,
    updateFields: (fileds: Partial<FormData>) => void

}

const Preference = ({ data, updateFields }: PerferenceProps) => {

    return (
        <PerferenceWrapperStyled>
            <h2>Perference</h2>
            <div style = {{display:"flex", flexDirection:"column",gap:"16px",maxWidth:300}}>

                <FormControl sx={{ m: 1, minWidth: 250, height: 40 }} size="small">
                    <InputLabel id="activitylevel-label">Activity Level</InputLabel>
                    <Select
                        labelId="activitylevel-label"
                        id="activitylevel-select"
                        value={data.activitylevel}
                        label="Activity Level"
                        onChange={(e) => updateFields({ activitylevel: e.target.value })}
                    >
                        <MenuItem value="Sedentary">Sedentary</MenuItem>
                        <MenuItem value="Light">Light</MenuItem>
                        <MenuItem value="Moderate">Moderate</MenuItem>
                        <MenuItem value="veryActive">Very Active</MenuItem>
                        <MenuItem value="Athlete">Athlete</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 250, height: 40 }} size="small">
                    <InputLabel id="perferredWorkoutTime-label">Preferred Workout Time</InputLabel>
                    <Select
                        labelId="perferredWorkoutTime-label"
                        id="perferredWorkoutTime-select"
                        value={data.perferredWorkoutTime}
                        label="Preferred Workout Time"
                        onChange={(e) => updateFields({ perferredWorkoutTime: e.target.value })}
                    >
                        <MenuItem value="Morning ">Morning </MenuItem>
                        <MenuItem value="Afternoon ">Afternoon </MenuItem>
                        <MenuItem value="Evening">Evening</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 250, height: 40 }} size="small">
                    <InputLabel id="perferredworkoutType-label"> Preferred Workout Type</InputLabel>
                    <Select
                        labelId="perferredworkoutType-label"
                        id="perferredworkoutType-select"
                        value={data.perferredworkoutType}
                        label=" Preferred Workout Type"
                        onChange={(e) => updateFields({ perferredworkoutType: e.target.value })}
                    >
                        <MenuItem value="Morning">Cardio  </MenuItem>
                        <MenuItem value="strengthTraining">Strength Training </MenuItem>
                        <MenuItem value="Yoga">Yoga </MenuItem>
                        <MenuItem value="Mixed">Mixed</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 250, height: 40 }} size="small">
                    <InputLabel id="perferredworkoutType-label"> Primary Fitness Goal</InputLabel>
                    <Select
                        labelId="perferredworkoutType-label"
                        id="perferredworkoutType-select"
                        value={data.primaryFitnessGoal}
                        label=" Primary Fitness Goal"
                        onChange={(e) => updateFields({ primaryFitnessGoal: e.target.value })}
                    >
                        <MenuItem value="loseWeight">Lose weight</MenuItem>
                        <MenuItem value="buildmuscle">Build muscle</MenuItem>
                        <MenuItem value="maintainfitness">Maintain fitness</MenuItem>
                        <MenuItem value="gainflexibility">Gain flexibility</MenuItem>
                    </Select>
                </FormControl>
            </div>

        </PerferenceWrapperStyled>
    )
}

export default Preference