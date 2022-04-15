import { Navigate, Outlet } from "react-router-dom"

import AuthService from '../services/auth-service'

export default function PrivateRoute() {
    const isLogged = AuthService.isAuthenticated()
    return isLogged ? <Outlet /> : <Navigate to="/login" />
}
