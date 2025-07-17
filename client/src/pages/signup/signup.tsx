import { useForm } from "react-hook-form"
import { PageWrapper, FormBox, Title, Container, InputWrapper, ErrorText, Input, Button, ParaTag } from "../../components/shared/AuthForm.styles"
import { useNavigate } from "react-router-dom"
import { signupService } from "../../services/authServices"
import { useToast } from "../../components/toast/toastContext"

type FormValues = {
    name:string,
    email: string,
    password: string,
    confirmPassword: string
}

const Signup = () => {
    const { showToast } = useToast()
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>()
    const password = watch('password')
    const onSubmit = async (formData: FormValues) => {
        try {
            await signupService(formData)
            showToast("Signup successful!","success")
            navigate('/')
        } catch (error:any) {
             showToast(error?.response?.data?.message,"error")
        }
    }
    return (
        <PageWrapper>
            <FormBox>
                <Title>Hello <span>there!</span></Title>
                <Container>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <InputWrapper>
                            <Input
                                {...register('name', { required: 'name is Required' })}
                                type='text'
                                placeholder="Name"
                            />
                             {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                         </InputWrapper>
                         <InputWrapper>
                            <Input
                                {...register('email', { required: 'Email is Required' })}
                                type='text'
                                placeholder="Email"
                            />
                            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                        </InputWrapper>
                        <InputWrapper>
                            <Input
                                {...register('password', { required: 'password is Required' })}
                                type='password'
                                placeholder="Password"
                            />
                            {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
                        </InputWrapper>
                        <InputWrapper>
                            <Input
                                {...register('confirmPassword', { 
                                    required: 'password is Required', 
                                    validate: (value) => 
                                        value === password || 'Passwords do not Match'
                                 })}
                                type='password'
                                placeholder="Confirm-Password"
                            />
                            {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
                        </InputWrapper>
                        <Button type="submit">Sign up</Button>
                    </form>

                    <ParaTag>Already have an account? <span onClick={() => navigate('/')}>Login here</span></ParaTag>
                </Container>
            </FormBox>
        </PageWrapper>
    )
}

export default Signup