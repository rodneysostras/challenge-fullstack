import React from 'react'
import Card from '../../components/card'

import ModuloService from '../../services/modulo-service'

import ImgBook from '../../assets/img/book.svg'

import './styles.scss'

export default function HomePage() {
    const [modulos, setModulos] = React.useState([])

    React.useEffect(() => {
        ModuloService.list()
            .then((data) => setModulos(data))
    }, [])

    const detailCard = (text) => {
        return (<p>Quantidade de aulas: {text}</p>)
    }

    return (
            <section className="page__home">
                <ul>
                    { modulos.map((mod, idx) => (
                        <li key={idx}>
                            <Card
                                icon={ImgBook}
                                title={mod.nome}
                                detail={detailCard(mod.qtd_aulas)}
                                actionTitle="Veja as aulas"
                                url={`/modulo/${mod.modulo_id}`}
                            />
                        </li>
                    ))}

                    {modulos.length == 0 && (<span>Sem registros</span>) }
                </ul>
            </section>
    )
}
