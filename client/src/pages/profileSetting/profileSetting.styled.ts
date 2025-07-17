import styled from "styled-components";

export const ProfileWrapperStyled = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;  // not space-between — that will push children apart vertically
  background: yellow;
  width: 100%;
  overflow: hidden;  // let parent handle scroll
`

export const HeaderProfileStyled = styled.div`
    margin-top:20px;
    height: 5%;
    width: 40%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
    margin-top: 1rem;
    color: #000000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 1.6;
`
export const StepperBoxStyled = styled.div`
  height: 10%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const StepperStyled = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  font-weight: bold;
  border-radius: 50px;
`;

export const StepperLineStyled = styled.div`
  height: 3px;
  width: 120px;
  background-color: red;
`;