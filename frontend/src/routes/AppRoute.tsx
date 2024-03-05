import {createBrowserRouter} from "react-router-dom"
import LoginPage from "../pages/LoginPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import DashboardPage from "../pages/admin_components/DashboardPage.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement:<ErrorPage />
    },
    {path: "/login", element: <LoginPage />},
    {
        path: "/admin",
        element: <DashboardPage />,
    }
])
