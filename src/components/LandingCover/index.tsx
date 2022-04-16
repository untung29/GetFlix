import styled from '@emotion/styled';
import Cover from '../../images/cover.jpg';

const LandingCover = styled.div`
  background-image: url(${Cover});
  background-position: center;
  background-size: cover;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export default LandingCover;
