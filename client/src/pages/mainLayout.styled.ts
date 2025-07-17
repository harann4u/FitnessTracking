import styled from 'styled-components';

export const MainPageWrapperStyled = styled.div`
  background-color: #fddbd3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
  padding: 3px;
 
`;

export const HeaderStyled = styled.div`
  width: 100%;
  max-width: 1360px;
  background-color: #ffffff;
  height: 10%;
  display: flex;
  justify-content:space-between;
  align-items: center;
   padding: 0 20px;
`;

export const MainPannelStyled  = styled.div` // has the side pannel and Main Box
  width: 100%;
  max-width: 1400px;
  background-color: #fddbd3;
  display: flex;
  gap: 10px;
  padding: 5px;
`;



export const MainBoxPannelStyled  = styled.div` // showing the Content like the Dashboard , profile etc.
  flex: 1;
  background-color: #ffffff;
  display: flex;
  justify-content: column; 
  align-items: stretch; 
  gap: 10px;
`;