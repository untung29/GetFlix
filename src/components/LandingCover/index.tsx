import styled from '@emotion/styled';

const LandingCover = styled.div`
  background-image: url('./images/cover.jpg');
  background-position: center;
  background-size: cover;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export default LandingCover;
