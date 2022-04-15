import React from 'react'

import Textfield from '../textfield'

import useAuth from '../../hooks/auth-hooks'

import './styles.scss'

export default function LoginModal() {
    const { login } = useAuth()
    const [auth, setAuth] = React.useState({})
    const [error, setError] = React.useState("")
    const [buttonDisabled, setButtonDisabled] = React.useState(true)

    const handleSubmit = async () => {
        setButtonDisabled(true)

        login(auth.username, auth.password, (c) => {
            if(c.error) {
                setError(c.error)
            }
        })
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setAuth((state) => {
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
