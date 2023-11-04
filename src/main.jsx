import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
}  from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import SearchPage from './pages/SearchPage/SearchPage.jsx'
import Register from './pages/Register.jsx';
import Property from './pages/Property.jsx';
import AddPropertyForm from './components/AddPropertyForm.jsx';
import Sellerdashboard from './pages/Sellerdashboard.jsx';
import NewGig from './pages/NewGig.jsx';
import Conversations from './pages/Conversations.jsx';


const Layout = () => {
  return(
    <div>

      <Navbar/>
      <Outlet/> 
      {/* <Footer/> */}
   
    </div>
  
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
     
      
       {
         path: "/search",
         element: <SearchPage />
       },
       
       {
         path: "/property/:id",
         element: <Property />
       },
       {
        path: "/user/:id/dashboard",
        element: <Sellerdashboard />
      },
       {
        path: "/user/:id/rental/new",
        element: <NewGig />
      },
      {
        path: "/inbox",
        element: <Conversations />
      },
      // {
      //   path: "/profile",
      //   element: <Profile />
      // },
      // {
      //   path: "/newprofile/:id",
      //   element: <ArtisanProfile /> 
      // },
      // {
      //   path: "/product/:id",
      //   element: <ProductPage />
      // },
      // {
      //   path: "/cart",
      //   element: <CartPage /> // Add a valid CartPage element
      // }
    ],
    
  }, {
    path: "/login",
    element: <Login />
  },
  {
    path: "/addProperty",
    element: <AddPropertyForm />
  }, {
    path: "/register",
    element: <Register />
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />

    <App />

  </React.StrictMode>,
)

