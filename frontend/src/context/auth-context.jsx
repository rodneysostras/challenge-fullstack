import React from 'react'

import AuthService from '../services/auth-service'

export const AuthContext = React.createContext()

export default function AuthContextProvider({ children }) {
    const authenticated = AuthService.isAuthenticated()
    const [ auth, setAuth ] = React.useState(authenticated)

    function login(username, password, callback) {
        AuthService.login(username, password)
            .then(() => {
                setAuth(true)
                callback({ status: 'success' })
            })
            .catch((e) => callback({ error: e }))
    }

    function logout() {
        AuthService.logout()
        setAuth(false)
    }

    return (
        <AuthContext.Provider value={{signed: Boolean(auth), login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}
