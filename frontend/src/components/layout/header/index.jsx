import { Link } from 'react-router-dom'

import './styles.scss'

export default function HeaderLayout() {
    return (
        <header className='header-layout layout-wrap'>
            <section className='layout-container'>
                <a href="#">
                    <img src="" alt="" />
                </a>
                <nav className='menu'>
                    <ul>
                        <li><Link to="signin">Entrar</Link></li>
                        <li><Link to="signup">Cadastrar</Link></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}