import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Breadcrumbs from '../../components/breadcrumbs'

import verzelService from '../../services/verzel-service'

import './styles.scss'

export default function ModuloPage() {
    const { id } = useParams()
    const [modulo, setModulo] = React.useState({})

    React.useEffect(() => {
        verzelService.getModulo(id)
            .then((data) => setModulo(data))
    }, [])

    return (
        <section className="page__modulo">
            <Breadcrumbs>
                <Link to="/">Inicio</Link>
                <Link to="/modulo">Modulo</Link>
                <span>{ modulo.nome }</span>
            </Breadcrumbs>
            <div className="page__modulo__wrap">
                <div className="info">
                    <h1>Modulo - { modulo.nome }</h1>
                    <p>
                        { modulo.aulas?.length || 0 }
                        { modulo.aulas?.length > 1 ? " Aulas" : " Aula" }
                    </p>
                </div>
                { modulo.aulas && modulo.aulas.map((aula_name, idx) => (
                    <p key={idx}>{ aula_name }</p>
                ))}
                { modulo.aulas && modulo.aulas.length == 0 && (<p>Nenhuma aula cadastrada</p>)}
            </div>
        </section>
    )
}
