import {createBrowserRouter} from "react-router-dom"
import LoginPage from "../pages/admin_page/LoginPage.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import AboutmePage from "../pages/aboutme_page/AboutmePage.tsx";
import LayoutPage from "../pages/LayoutPage.tsx";
import BlogPage from "../pages/blog_page/BlogPage.tsx";
import JapanPage from "../pages/japan_page/JapanPage.tsx";
import SingleBlog from "../pages/blog_page/SingleBlog.tsx";
import AnalyticDashboard from "../pages/admin_page/AnalyticDashboard.tsx";
import HomeDashboard from "../pages/admin_page/HomeDashboard.tsx";
import Sidebar from "../pages/admin_page/Sidebar.tsx";
import BlogPost from "../pages/admin_page/BlogPost/BlogPost.tsx";
import UserDashboard from "../pages/admin_page/UserDashboard.tsx";
import BlogList from "../pages/admin_page/BlogPost/BlogList.tsx";
import BlogEdit from "../pages/admin_page/BlogPost/BlogEdit.tsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "blog",
                element: <BlogPage/>,
            },

            {
                path: 'blog/:postId',
                element: <SingleBlog />
            },

            {
                path: "japan",
                element: <JapanPage/>,
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
        element: <Sidebar/>,
        children: [
            {
                path:"analytics",
                element: <AnalyticDashboard />
            },
            {
                path:"home",
                element: <HomeDashboard />
            },
            {
                path: "blog",
                element: <BlogPost/>,
            },
            {
                path: "blog/list",
                element: <BlogList/>,
            },
            {
                path: "blog/edit/:postId",
                element: <BlogEdit />
            },
            {
                path: "user",
                element: <UserDashboard/>,
            }
        ]
    },
])
