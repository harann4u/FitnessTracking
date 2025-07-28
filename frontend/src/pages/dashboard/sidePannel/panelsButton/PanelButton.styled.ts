import styled from "styled-components";

export const PanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    // background-color:yellow;
    height: 60%;
    width: 90%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    padding:3px;
    gap:12px
` ;

export const PanelButtonStyled = styled.button<{isActive:boolean}>`
  margin-top:10px;
  background: ${({isActive})=>(isActive ? 'linear-gradient(to right, #ff6600, #ff3366)':'white')};
  color: ${({isActive})=>(isActive ? 'white' : 'black')};
  border: 2px solid #ff6600;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 90%;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    background: linear-gradient(to right, #ff6600, #ff3366);
    color: white;
    border: none;
  }
`;