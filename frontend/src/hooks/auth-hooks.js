import React from "react"
import { AuthContext } from "../context/auth-context"

export default function useAuth() {
    const context = React.useContext(AuthContext)

    return context
}
