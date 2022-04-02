import LandingPage from 'pages/LandingPage';
import SearchResultPage from 'pages/SearchResultPage';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient();

export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchResultPage />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
