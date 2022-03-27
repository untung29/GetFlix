import LandingPage from 'pages/LandingPage';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import styled from '@emotion/styled';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <h1 className="logo">Getflix</h1> */}
      <LandingPage />
    </QueryClientProvider>
  );
}
