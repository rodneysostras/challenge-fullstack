import { Navigate, Outlet, useLocation } from "react-router-dom"

import useAuth from '../hooks/auth-hooks'

export default function PrivateRoute() {
    const location = useLocation()
    const { signed } = useAuth()
    return signed ?
        <Outlet />:
        <Navigate
            to="/login"
            replace={true}
            state={{ previous: location.pathname }}
        />
}
