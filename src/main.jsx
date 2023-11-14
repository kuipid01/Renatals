import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";
import Register from "./pages/Register.jsx";
import Property from "./pages/Property.jsx";
import AddPropertyForm from "./components/AddPropertyForm.jsx";
import Sellerdashboard from "./pages/Sellerdashboard.jsx";
import NewGig from "./pages/NewGig.jsx";
import Conversations from "./pages/Conversations.jsx";
import Footer from "./components/Footer.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";


const Layout = () => {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ScrollRestoration />
        <Navbar />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },

      {
        path: "/search",
        element: <SearchPage />,
      },

      {
        path: "/property/:id",
        element: <Property />,
      },

      {
        path: "/user/:id/dashboard",
        element: <ProtectedRoutes />,
        children: [
          {
            index: true,
            element: <Sellerdashboard />,
          },
        ],
      },
      {
        path: "/user/:id/rental/new",
        element: <NewGig />,
      },
      {
        path: "/inbox",
        element: <ProtectedRoutes />,
        children: [
          {
            index: true,
            element: <Conversations />,
          },
        ],
      },
    ],
  },
  
  {
    path: "/login",
    element: <Login />,
  },
  ,
  {
    path: "/addProperty",
    element: <ProtectedRoutes />,
    children: [
      {
        index: true,
        element: <AddPropertyForm />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    <App />
  </React.StrictMode>
);
