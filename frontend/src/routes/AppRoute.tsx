import {createBrowserRouter} from "react-router-dom"
import App from "../App.tsx";
import Dashboard from "../components/Dashboard.tsx";
import User from "../pages/User.tsx";
import LoginPage from "../pages/LoginPage.tsx";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children: [
            {path:"dashboard", element:<Dashboard />},
            {path:"user", element:<User />},
            {path:"login", element:<LoginPage />},
        ]
    }
])