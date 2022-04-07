import './styles.scss'

import ImgSite from '../../../assets/img/globe.svg'
import ImgGithub from '../../../assets/img/github.svg'
import ImgCode from '../../../assets/img/code.svg'
import ImgLinkedin from '../../../assets/img/linkedin.svg'

export default function FooterLayout() {
    return (
        <footer className="footer-layout layout-container">
            <section className='layout-content'>
                <small>Copyright © 2022 Rodney Sostras</small>
                <ul className='links'>
                    <li>
                        <a href="https://rodneysostras.me/" height="12px" width="12px" target="_blank">
                            <img src={ImgSite} alt="Site do Rodney Sostras"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/rodneysostras" target="_blank">
                            <img src={ImgGithub} alt="Site do Rodney Sostras"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/rodneysostras/challenge-fullstack-verzel" target="_blank">
                            <img src={ImgCode} alt="Site do Rodney Sostras"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/rodney-sostras" target="_blank">
                            <img src={ImgLinkedin} alt="Site do Rodney Sostras"/>
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}