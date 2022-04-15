import React from 'react'
import { useNavigate } from 'react-router-dom'

import Textfield from '../textfield'

import AuthService from '../../services/auth-service'

import './styles.scss'

export default function LoginModal() {
    const navigate = useNavigate()
    const [login, setLogin] = React.useState({})
    const [error, setError] = React.useState("")
    const [buttonDisabled, setButtonDisabled] = React.useState(true)

    const handleSubmit = () => {
        setButtonDisabled(true)

        AuthService.login( login.username, login.password )
            .then(() => navigate("/"))
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

        if (buttonDisabled) {
            setButtonDisabled(false)
            setError("")
        }
    }

    return (
        <div className="login-modal">
            <input type="checkbox" id="login-modal"/>
            <label htmlFor="login-modal" className="login-modal-title">LOGIN</label>
            <div className='login-modal-content'>
                <form autoComplete='off' onSubmit={(e) => e.preventDefault()}>
                <Textfield
                    type="text"
                    name="username"
                    placeholder="Usuário"
                    onChange={handleChange}
                />
                <Textfield
                    type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={handleChange}
                />
                <button
                    className="login-modal-action"
                    disabled={buttonDisabled}
                    onClick={handleSubmit}
                >
                    Entrar
                </button>
                <small className="login-modal-error">{ error }</small>
                </form>
            </div>
        </div>
    )
}
