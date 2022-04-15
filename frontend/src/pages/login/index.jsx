import React from 'react'
import { useNavigate } from 'react-router-dom'

import LayoutPage from '../../components/layout/page'
import Textfield from '../../components/textfield'
import Alert from '../../components/alert'

import AuthService from '../../services/auth-service'

import './styles.scss'

export default function LoginPage() {
    const navigation = [{"home": "/"}, "login"]
    const navigate = useNavigate()
    const [ login, setLogin ] = React.useState({})
    const [ buttonDisabled, setButtonDisabled ] = React.useState(true)
    const [ error, setError ] = React.useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setButtonDisabled(true)

        AuthService.login( login.username, login.password )
            .then((d) => navigate("/"))
            .catch((err) => {
                if (err.status === 401) {
                    setError("Usuário ou senha ínvalido")
                } else {
                    setError(err.data)
                }
            })
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setLogin((state) => {
            return { ...state, [name]: value }
        })
        if(buttonDisabled) {
            setError("")
            setButtonDisabled(false)
        }
    }

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
                    requered
                />
                <Textfield
                    type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={handleChange}
                    requered
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
