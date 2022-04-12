import { Link } from 'react-router-dom'

import './style.scss'

export default function E404Page() {
    return (
        <section className="page__e404">
            <h2>404 - Pagina não encontrada</h2>
            <Link to="/">IR PARA INICIO ➔</Link>
        </section>
    )
}
