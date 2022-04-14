import React from 'react'
import Card from '../../components/card'

import ModuloService from '../../services/modulo-service'

import './styles.scss'

export default function HomePage() {
    const [modulos, setModulos] = React.useState([])

    React.useEffect(() => {
        ModuloService.list()
            .then((data) => setModulos(data))
    }, [])

    return (
            <section className="page__home">
                <ul>
                    { modulos.map((mod, idx) => (
                        <li key={idx}>
                            <Card
                                title={mod.nome}
                                detail={mod.qtd_aulas}
                                url={`/modulo/${mod.modulo_id}`}
                            />
                        </li>
                    ))}

                    {modulos.length == 0 && (<span>Sem registros</span>) }
                </ul>
            </section>
    )
}
