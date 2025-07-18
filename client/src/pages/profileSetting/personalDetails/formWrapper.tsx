import { useState } from "react"
import { FormButtonStyled, FormWrapperStyled } from "./formWrapper.styled"
import type { FormData } from "./FormData"
import { useMultiStepForm } from "../useMultiStepForm"
import PersonalInfo from "./personalInfo/personalInfo"
import FitnessProfile from "./fitnessProfile/fitnessProfile"
import Preference from "./perference/preference"

type FormWrapperTypes = {
    title: string,
    description?: string,
    children?: React.ReactNode
}

const INITIAL_DATA: FormData = {
    fullName: "",
    email: "",
    password: "",
    phoneNumber: '',
    gender: "",
    experienceLevel: "",
    age: null,
    height: null,
    currentWeight: null,
    goalWeight: null,
    activitylevel: "",
    perferredWorkoutTime: "",
    perferredworkoutType: "",
    primaryFitnessGoal:''
}

const FormWrapper = ({ title }: FormWrapperTypes) => {
    const [data, setData] = useState<FormData>(INITIAL_DATA)

    function updateFields(fileds: Partial<FormData>) {
        setData((prev) => ({ ...prev, ...fileds }))
    }

    const {
        currentIndex,
        step,
        isFirstStep,
        isLastStep,
        next,
        goTo,
        back,
    } = useMultiStepForm([
        <PersonalInfo key={"personalInfo"} data={data} updateFields={updateFields} />,
        <FitnessProfile key={"fitnessProfile"} data={data} updateFields={updateFields} />,
        <Preference key={"fitnessProfile"} data={data} updateFields={updateFields} />
    ])

    const onSubmit = (e: React.FormEvent) => {
       
        e.preventDefault();
        if (!isLastStep) return next();
        console.log('FormData',data)
    }
    return (
        <FormWrapperStyled>
            <form onSubmit={onSubmit} style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:'100%'}}>
                {step}
                <div style={{display:'flex', gap:'5px'}}>
                    {!isFirstStep && <FormButtonStyled type="button" onClick={back}>Back</FormButtonStyled>}
                    <FormButtonStyled type="submit">{isLastStep ? "submit" : "Next"}</FormButtonStyled>
                </div>
            </form>
        </FormWrapperStyled>
    )
}

export default FormWrapper