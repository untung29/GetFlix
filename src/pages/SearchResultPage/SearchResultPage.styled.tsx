import styled from '@emotion/styled';

export const SearchResultContainer = styled.div`
  background-color: #5a0019;
  min-height: 100vh;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
