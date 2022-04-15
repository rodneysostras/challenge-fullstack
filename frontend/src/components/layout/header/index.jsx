import LoginModal from '../../../components/login-modal'

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
                        <li><LoginModal /></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}
