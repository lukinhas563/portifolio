import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Post from "../pages/post/Post"
import Content from "../pages/article/Content";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/post',
        element: <Post />,
        children: [
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
])