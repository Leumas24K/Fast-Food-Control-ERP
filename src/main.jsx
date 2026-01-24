import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter} from 'react-router'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import Home from './routes/Home.jsx'
import Client from './routes/Client.jsx'
import Signin from './routes/Signin.jsx'
import Dashboard from './routes/Dashboard.jsx'
import ProtectedRoutes from './routes/ProtectedRoutes.jsx'

const router = createBrowserRouter([

  { path: "/",    element: <App /> },

  { path: "/home",    element: <Home /> },

  { path: "/client",    element: <Client /> },

  { path: "/signin",    element: <Signin /> },

  { path: "/",
    
    element: <ProtectedRoutes />,
  
    children: [

      {
        path:"/dashboard",

        element: <Dashboard />

      },
    ],
  
  }


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
