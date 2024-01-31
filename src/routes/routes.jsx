import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Post from "../pages/post/Post"
import Content from "../pages/article/Content"
import Login from "../pages/login/Login"
import { PrivateRoutes } from ".";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/post',
        element: <PrivateRoutes />,
        children: [
            {
                path: '/post',
                element: <Post />,
            },
            {
                path: '/post/edit/:id',
                element: <Post />,
            }
        ]
    },
    {
        path: '/content/:contentId',
        element: <Content />
    },
    {
        path: '/login',
        element: <Login />
    },
])