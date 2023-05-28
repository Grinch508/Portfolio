import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import HttpError from './HttpError/HttpError';
import Projects from './places/pages/Projects';
import TechStack from './places/pages/TechStack';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <HttpError />,
  },
  {
    path: '/stack',
    element: <TechStack />,
    errorElement: <HttpError />,
  },
  {
    path: '/projects',
    element: <Projects />,
    errorElement: <HttpError />,
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
