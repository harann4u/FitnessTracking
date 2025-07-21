import { useState } from "react"
import { FormButtonStyled, FormWrapperStyled } from "./formWrapper.styled"
import type { FormData } from "./FormData"
import { useMultiStepForm } from "../useMultiStepForm"
import PersonalInfo from "./personalInfo/personalInfo"
import FitnessProfile from "./fitnessProfile/fitnessProfile"
import Preference from "./perference/preference"
import { useToast } from "../../../components/toast/toastContext"
import { useDispatch } from "react-redux"
import {  type UserDetailsType } from "../../../store/slice/userDetails/userDetailsSlice"
import { useNavigate } from "react-router-dom"
import type { AppDispatch } from "../../../store/store"
import { postUserDetails } from "../../../store/slice/userDetails/userServices"

type FormWrapperTypes = {
    title: string,
    description?: string,
    children?: React.ReactNode
}

const INITIAL_DATA: UserDetailsType = {
    fullName: "",
    email: "",
    password: "",
    phoneNumber: '',
    gender: "",
    experienceLevel: "",
    age: 0,
    height: 0,
    currentWeight: 0,
    goalWeight: 0,
    activitylevel: "",
    perferredWorkoutTime: "",
    perferredworkoutType: "",
    primaryFitnessGoal: ''
}

const FormWrapper = ({ title }: FormWrapperTypes) => {
    const [data, setData] = useState<UserDetailsType>(INITIAL_DATA)
    const { showToast } = useToast()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    function updateFields(fileds: Partial<UserDetailsType>) {
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

    const onSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        if (!isLastStep) {
            return next();
        } else {
            try {
                const result = await dispatch(postUserDetails(data))
                console.log('result',result)
                navigate('/dashboard')
            } catch (err: any) {
                showToast(err?.response?.data?.message, "error")
            }
        }

    }
    return (
        <FormWrapperStyled>
            <form onSubmit={onSubmit} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: '100%' }}>
                {step}
                <div style={{ display: 'flex', gap: '5px' }}>
                    {!isFirstStep && <FormButtonStyled type="button" onClick={back}>Back</FormButtonStyled>}
                    <FormButtonStyled type="submit">{isLastStep ? "submit" : "Next"}</FormButtonStyled>
                </div>
            </form>
        </FormWrapperStyled>
    )
}

export default FormWrapper