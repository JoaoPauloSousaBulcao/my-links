import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Login from './routes/Login.jsx'
import Register from './routes/Register.jsx'
import MyLinks from './routes/MyLinks.jsx'
import UsersList from './routes/UsersList.jsx'
import LinksUser from './routes/LinksUser.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import AdictionLink from './routes/AdictionLink.jsx'

const router = createBrowserRouter([

  {
    path: "/home",
    element: <App/>,
    children: [
      {
        path: "/home",
        element: <MyLinks/>,
      },
      {
        path: "users-list",
        element: <UsersList/>,
      },
      {
        path: "users-list/:id",
        element: <LinksUser/>,
      },
      {
        path: "adiction-link",
        element: <AdictionLink/>,
      },
      
      // {
      //   path: "links-user",
      //   element: <LinksUser/>,
      // },
    ]
  },
  {
    path: "/",
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "register",
    element: <Register/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
