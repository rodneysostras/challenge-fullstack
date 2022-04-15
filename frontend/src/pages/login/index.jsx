import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/auth-hooks'

import LayoutPage from '../../components/layout/page'
import Textfield from '../../components/textfield'
import Alert from '../../components/alert'

import './styles.scss'

export default function LoginPage() {
    const navigation = [{"home": "/"}, "login"]
    const navigate = useNavigate()
    const location = useLocation()
    const { signed, login } = useAuth()
    const [ auth, setAuth ] = React.useState({})
    const [ buttonDisabled, setButtonDisabled ] = React.useState(true)
    const [ error, setError ] = React.useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setButtonDisabled(true)

        login(auth.username, auth.password, (c) => {
            if (c.error) {
                if (c.error.status === 401) {
                    setError("Usuário ou senha ínvalido")
                } else {
                    setError(error)
                }
            } else {
                navigate(location.state?.previous || "/", { replace: true })
            }
        })
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setAuth((state) => {
            return { ...state, [name]: value }
        })
        if(buttonDisabled) {
            setError("")
            setButtonDisabled(false)
        }
    }

    React.useEffect(() => {
        if (signed) {
            navigate("/", { replace: true })
        }
    }, [])

    return (
        <LayoutPage
            breadcrumbs={navigation}
        >
            <form
                className="page__login__form"
                autoComplete='off'
                onSubmit={handleSubmit}
            >
                <h2 className="page__login__title">Seja bem vindo!</h2>
                <p>Realize o login para continuar</p>
                <Textfield
                    type="text"
                    name="username"
                    placeholder="Usuário"
                    onChange={handleChange}
                    required
                />
                <Textfield
                    type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    className="page__login__form__action"
                    disabled={buttonDisabled}
                >
                    Entrar
                </button>
                { error && (<Alert value={error} error/>) }
            </form>
        </LayoutPage>
    )
}
