import { useContext } from "react"
import { AuthGoogleContext } from "../context/authGoogle"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoutes = () => {

    const { signed } = useContext(AuthGoogleContext)

    const verification = () => {

        if (signed) {

            return <Outlet />

        } else {

            return <Navigate to={'/login'} />

        }

    }

    return verification()
}