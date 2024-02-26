import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Job from './pages/jobs.jsx'
import Details from './pages/detail.jsx'
import Error from './pages/error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>
  },
  {
    path: '/jobs',
    children: [
      {
        path: '',
        element: <Job/>,
      },
      {
        path: ':id',
        element: <Details/>
      }
    ],
    errorElement: <Error/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
