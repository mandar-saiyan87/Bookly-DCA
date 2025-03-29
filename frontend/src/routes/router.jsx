import { createBrowserRouter, Outlet } from "react-router"
import Navbar from "../components/shared/Navbar"
import Homepage from "../pages/Homepage"
import Login from "../pages/Login"
import Register from "../pages/Register"

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div className="w-full h-full mx-auto">
                <Navbar />
                <Outlet />
            </div>
        ),
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },




])