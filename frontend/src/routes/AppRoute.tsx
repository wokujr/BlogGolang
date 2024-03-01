import {createBrowserRouter} from "react-router-dom"
import Dashboard from "../components/Dashboard.tsx";
import UserPage from "../pages/UserPage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import App from "../App.tsx";

export const router = createBrowserRouter([
    // {
    //     path:"/",
    //     element:<App />,
    //     children: [
    //         {path:"dashboard", element:<Dashboard />},
    //         {path:"user", element:<UserPage />},
    //         {path:"login", element:<LoginPage />},
    //     ]
    // }

    {
        path:"/", element: <App />
    },
    {
        path: "/dashboard", element:<Dashboard />
    },
    {
        path: "/login", element: <LoginPage />
    },
    {
        path: "/user", element: <UserPage />
    }
])