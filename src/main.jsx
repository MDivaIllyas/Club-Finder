import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import About from './About.jsx'
import Clubs from './clubs.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import ClubDetail from './components/ClubDetails.jsx'

const router = createBrowserRouter([
  {path:"/", element:<App />},
  {path:"/about", element:<About />},
  {path:"/clubs", element:<Clubs />},
  {path:"*", element:<NotFoundPage />},
  {path:"/clubs/:id", element:<ClubDetail />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
