import { styled } from "styled-components";


export const HeaderTitle = styled.strong`
  background: linear-gradient(to right, #ff6600, #ff3366);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* optional layout styles */
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WelcomeTitle = styled.div`
  background-color: white;
  width: fit-content;
  padding: 0.75rem 1.5rem;
//   border-radius: 12px;
  color: #333;
  font-weight: 600;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
