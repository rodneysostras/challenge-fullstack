import { Link } from 'react-router-dom'
import ImgBook from '../../assets/img/book.svg'

import './style.scss'

function Card({ actionTitle, icon, url, title, detail }) {
    return (
        <div className="card">
            <div className="card__header">
                <img src={icon} className="card__header_icon" />
                <div className="card__header__info">
                    <h3>{ title }</h3>
                    { detail }
                </div>
            </div>
            <Link to={url}>{ actionTitle }</Link>
        </div>
    )
}

Card.defaultProps = {
    url: '#',
    title: 'Nome do modulo',
    detail: 0
}

export default Card
