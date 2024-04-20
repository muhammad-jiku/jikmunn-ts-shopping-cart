import React from 'react';
import ReactDOM from 'react-dom/client';
// external import
import { QueryClient, QueryClientProvider } from 'react-query';
// internal import
import App from './App';

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
