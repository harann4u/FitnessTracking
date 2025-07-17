import styled from 'styled-components';

export const BannerWrraperStyled = styled.div`
  width: 100%;
  max-width: 700px;
  height: 120px;
  border-radius: 16px;
  padding: 1rem 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 102, 0, 0.9), rgba(255, 102, 0, 0.3)),
    url('/women-back-fitness-model-red-tops-fit-body-black-background-2243470-wallhere.com.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

export const BannerContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const BannerTextStyled = styled.div`
  flex: 1;
`;

export const BannerText = styled.h2`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem; /* fixed typo */
`;

export const BannerDescription = styled.p`
  color: #fff;
  font-size: 1rem;
  line-height: 1.5; /* fixed typo */
`;

export const BannerImageStyled = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px;
  }
`;
