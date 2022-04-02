import styled from '@emotion/styled';

export const H2Text = styled.h2`
  text-align: center;
  color: white;
  font-family: 'Helvetica';
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 50%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 75%;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
