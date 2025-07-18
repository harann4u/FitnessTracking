import styled from "styled-components";


export const FormWrapperStyled = styled.div`
  width: 90%;
  // background-color: green;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center; /* fixed typo */
  padding: 2rem;
`

export const FormButtonStyled = styled.button`
  margin-top:10px;
  background: linear-gradient(to right, #ff6600, #ff3366);
  color:white;
  border: 2px solid #ff6600;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 90%;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #ff6600, #ff3366);
    color: white;
  }
`;