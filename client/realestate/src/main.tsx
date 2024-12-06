import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App'
import About from './components/About'
import NotFoundPage from './components/NotFoundPage'
import AddInquiry from './components/AddInquiry'
import EditInquiry from './components/EditInquiry'
import ContactUs from './components/ContactUs'
import Listings from './components/Listings'
import Login from './components/Login'
import Register from './components/Register'
import Properties from './components/Properties'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <About/>,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services/add",
          element: <AddInquiry />,
        },
        {
          path: "/services/edit",
          element: <EditInquiry />,
        },
        {
          path: "/services/listings",
          element: <Listings />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/properties",
          element: <Properties />,
        },
        {
          path: "/privacy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/terms",
          element: <TermsOfService />,
        },
      ],
    }
  ]
)

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <RouterProvider router={router}  />
  </StrictMode>,
)
