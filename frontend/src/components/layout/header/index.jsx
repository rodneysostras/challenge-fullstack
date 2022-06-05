import React from 'react'
import LoginModal from '../../../components/login-modal'

import { AuthContext } from '../../../context/auth-context'

import './styles.scss'

export default function HeaderLayout() {
    const { signed, logout } = React.useContext(AuthContext)

    return (
        <header className='header-layout layout-wrap'>
            <section className='layout-container'>
                <a href="#">
                    <img src="" alt="" />
                </a>
                <nav className='menu'>
                    <ul>
                        { signed && (<li><a href="/" onClick={() => logout()}>LOGOUT</a></li>) }
                        { !signed && (<li><LoginModal /></li>) }
                    </ul>
                </nav>
            </section>
        </header>
    )
}
