import { ColorsTheme, GlobalStyle } from './styles/global';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

import App from './App';
import ErrorPage from './routes/Error';
import Forecast5Days from './routes/ForecastFiveDays';
import ForecastNow from './routes/ForecastCurrent';
import Home from './routes/Home';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,

      },
      {
        path: '/forecast/:latlon',
        element: <ForecastNow />
      },
      {
        path: '/forecast/:latlon/5days',
        element: <Forecast5Days />
      
      }
    ]
  }
]);

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={ColorsTheme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
