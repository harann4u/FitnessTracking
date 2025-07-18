import React, { useState } from "react"
import { PageWrapper, FormBox, Title, Input, ErrorText, Button, Container, InputWrapper, ParaTag } from "../../components/shared/AuthForm.styles"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { loginService, refershTokenService } from "../../services/authServices"
import { useToast } from "../../components/toast/toastContext"
import { useDispatch } from "react-redux"
import { saveLogindetails } from "../../store/slice/loginInfo/loginInfoSlice"

type FormValues = {
    email: string,
    password: string
}

const Login = () => {
    const dispatch = useDispatch()
    const { showToast } = useToast()
    const navigate = useNavigate()
    const [accesstoken, setAccessToken] = useState<string | null>(null)
    const { register, handleSubmit, formState: { errors }, } = useForm<FormValues>()


    const onSubmit = async (data: FormValues) => {
        try {
            const res = await loginService(data)
            const token = res.accessToken
            dispatch(saveLogindetails({accessToken:token,isLogin:true,authType:'user'}))
            showToast('Login Success Fully', 'success')
            navigate('/dashboard')

        } catch (err: any) {
            showToast(err?.response?.data?.message, "error")
        }
    }
    
    return (
        <PageWrapper>
            <FormBox>
                <Title>Welcome <span>!back</span></Title>
                <Container>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
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
                        <Button type="submit">Login</Button>
                    </form>
                    <ParaTag>Dont have an Account ? <span onClick={() => navigate('/signup')}>Please  Register</span></ParaTag>
                </Container>
            </FormBox>
        </PageWrapper>
    )
}

export default Login