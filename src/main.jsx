import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Front from './components/Front';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Users from './components/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Front/>,
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/users',
        element: <Users/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



