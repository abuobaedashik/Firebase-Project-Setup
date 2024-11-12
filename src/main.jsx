import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Main/Root.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Home from './Components/Home/Home.jsx';
import Private from './Components/Private/Private.jsx';
import PrivateRoutes from './Components/Routes/PrivateRoutes.jsx';
import Profile from './Components/Profile/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
       path:"/",
       element:<Home>Home page</Home>
      },
      {
       path:"/menu",
       element:<p>Menu Page</p>
      },
      {
       path:"/login",
       element:<Login></Login>
      },
      {
       path:"/register",
       element:<Register></Register>
      },
      {
       path:"/private",
       element:<PrivateRoutes><Private></Private></PrivateRoutes>
      },
      {
       path:"/profile",
       element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
