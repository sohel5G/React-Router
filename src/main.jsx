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
import UserDetails from './components/userDetails';
import Error from './components/error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Front/>,
    errorElement: <Error/>,
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
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        element: <Users/>
      },
      {
        path: '/user/:id',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails/>
      }
     
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



