import React from 'react'
import { Link } from 'react-router-dom'

import useAuth from '../../hooks/auth-hooks'

import LayoutPage from '../../components/layout/page'

import ImgBook from '../../assets/img/book.svg'
import ImgExit from '../../assets/img/exit.svg'
import ImgPlay from '../../assets/img/play.svg'
import ImgUser from '../../assets/img/user.svg'

import Box from './components/box'

import './styles.scss'

export default function HomePage() {
    const { signed, logout } = useAuth()
    const navigation = []

    return (
        <LayoutPage
            title="Página Inicial"
            breadcrumbs={navigation}
        >
            <div className='page__home'>
                <Box image={ImgBook} title="Módulo">
                    <Link to="/modulo" className='button'>LISTAR</Link>
                    <Link to="/modulo/novo" className={ `button ${ !signed && 'disabled' }`} >
                        { !signed &&'🔒' } NOVO
                    </Link>
                </Box>
                <Box image={ImgPlay} title="Aula">
                    <Link to="/aula" className='button'>LISTAR</Link>
                    <Link to="/aula/novo" className={ `button ${ !signed && 'disabled' }`}>
                        { !signed &&'🔒' } NOVO
                    </Link>
                </Box>
                { signed && (
                    <Box image={ImgExit} title="Logout">
                        <a href="/" onClick={() => logout()} className={ `button ${ !signed && 'disabled' }`}>SAIR</a>
                    </Box>
                )}
                { !signed && (
                    <Box image={ImgUser} title="Login">
                        <Link to="/login" className='button'>ENTRAR</Link>
                    </Box>
                )}
            </div>
        </LayoutPage>
    )
}
