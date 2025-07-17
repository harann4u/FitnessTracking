import styled from "styled-components";

export const ProfileCardWrapper = styled.div`
    // background-color: red;
    height: 30%;
    width: 90%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    padding:3px;
    gap:12px
`;

export const ProfileImage = styled.img`
   width: 100px;
   height: 100px;
   border-radius : 50%;
   object-fit : cover;
   border: 4px solid red;
`

export const ProfileName = styled.strong`
    color:black;
     width: 100px;
     margin-left: 11px
`

export const ProfileButton = styled.button`
  background: linear-gradient(to right, #ff6600, #ff3366);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 80%;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #e65c00, #e63366); // slightly darker
  }
`;