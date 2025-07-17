import styled from "styled-components";

export const PageWrapper = styled.div`
    height:100vh;
    width: 100vw;
    background-color: #fddbd3;
    display:flex;
    align-items:center;
    justify-content: center;
`
export const FormBox = styled.div`
    background-color:white;
    padding : 2rem;
    border-radius:16px;
    max-width:400px;
    width:100%;
    height: 70%;
    box-sizing:border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
export const Title = styled.h2`
    color:#d60000;
    font-size:24px;
    margin-bottom : 5px;
    span {
        color:black
    }
`
export const Input = styled.input`
    width:80%;
    padding:12px;
    margin-bottom:10px;
    border-radius:8px;
    border:1px solid #ddd;
    font-size:14px
`

export const ErrorText = styled.p`
    color:red;
    font-size:12px;
    min-height: 16px; 
    margin: 4px 0 10px;
`

export const InputWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:12px;
`

export const Button = styled.button`
     width: 100%;
    padding: 12px;
    border-radius: 8px;
    background-color: #d60000;
    color: white;
    border: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;     
  justify-content: center;   
  padding: 2rem;
` 

export const ParaTag = styled.p`
    color: black;
    font-size: 15px;
    margin-top : 35px;
   
    span {
        color:blue;
         cursor:pointer;
    }
`