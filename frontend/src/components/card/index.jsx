import { Link } from 'react-router-dom'
import ImgBook from '../../assets/img/book.svg'

import './style.scss'

function Card({ url, title, detail }) {
    return (
        <div className="card">
            <div className="card__header">
                <img src={ImgBook} />
                <div className="card__header__info">
                    <h3>{ title }</h3>
                    <p>Total de aulas: { detail }</p>
                </div>
            </div>
            <Link to={url}>Veja as aulas</Link>
        </div>
    )
}

Card.defaultProps = {
    url: '#',
    title: 'Nome do modulo',
    detail: 0
}

export default Card
