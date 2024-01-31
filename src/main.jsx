import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes/routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { AuthGoogleProvider } from './context/authGoogle';
import 'react-toastify/dist/ReactToastify.css'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthGoogleProvider>
      <RouterProvider router={AppRoutes} />
      <ToastContainer />
    </AuthGoogleProvider>
  </React.StrictMode>,
)
