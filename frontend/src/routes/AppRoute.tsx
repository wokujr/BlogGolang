import {createBrowserRouter} from "react-router-dom"
import LoginPage from "../pages/admin_page/LoginPage.tsx";
import DashboardPage from "../pages/admin_page/DashboardPage.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import AboutmePage from "../pages/aboutme_page/AboutmePage.tsx";
import LayoutPage from "../pages/LayoutPage.tsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "blog",
            }
        ]
    },
    {
        path: "/about",
        element: <AboutmePage/>,
    },

    {path: "/login", element: <LoginPage/>},
    {
        path: "/admin",
        element: <DashboardPage/>,
    },
])
