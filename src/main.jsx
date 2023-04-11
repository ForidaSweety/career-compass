import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=> fetch('companyDetails.json')
      },
      {
        path: '/id',
        element: <SingleCompDetail></SingleCompDetail>
        
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path:'application',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
