import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from '../home/Home'
import Shop from '../shop/Shop'
import About from "../components/About";
import Blog from "../components/Blog";
import Singlebook from "../shop/Singlebook";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../Dashboard/DashboardLayout";
import UploadBooks from "../Dashboard/UploadBooks";
import Managebooks from "../Dashboard/Managebooks";
import EditBooks from "../Dashboard/EditBooks";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/book/:id',
                element: <Singlebook />,
                loader: ({ params }) => fetch(`http://localhost:8000/book/${params.id}`)
            },
        ]
    },

    {
        path: "/admin/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBooks />
            },
            {
                path: "/admin/dashboard/manage",
                element: <Managebooks />
            },
            {
                path: "/admin/dashboard/manage",
                element: <Managebooks />
            },
            {
                path: "/admin/dashboard/edit-books/:id",
                element: <EditBooks />,
                loader: ({ params }) => fetch(`http://localhost:8000/book/${params.id}`)
            },
        ]
    },
]);

export default router;