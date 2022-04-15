import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../components/card'
import LayoutPage from '../../components/layout/page'

import ModuloService from '../../services/modulo-service'

import ImgBook from '../../assets/img/book.svg'
import ImgPlus from '../../assets/img/file-circle-plus.svg'

import './styles-listar.scss'

export default function HomePage() {
    const [modulos, setModulos] = React.useState([])

    const navigation = [
        {"inicio": "/"},
        {"modulo": "/"},
        "lista"
    ]

    React.useEffect(() => {
        ModuloService.list()
            .then((data) => setModulos(data))
    }, [])

    const detailCard = (text) => {
        return (<p>Quantidade de aulas: {text}</p>)
    }

    return (
        <LayoutPage
            title="Lista de Módulo"
            breadcrumbs={navigation}
        >
            <div className="page__modulo">
                <ul className="page__modulo__actions">
                    <li><Link to="/modulo/novo"><img src={ImgPlus}/>Novo Módulo</Link></li>
                </ul>
                <ul className="page__modulo__content">
                    { modulos && modulos.map((mod, idx) => (
                        <li key={idx}>
                            <Card
                                icon={ImgBook}
                                title={mod.nome}
                                detail={detailCard(mod.qtd_aulas)}
                                actionTitle="Veja as aulas"
                                url={`/modulo/${mod.modulo_id}`}
                            />
                        </li>
                    )) }
                </ul>
                <small>Total de modulos: {modulos.length}</small>
            </div>
        </LayoutPage>
            // <section className="page__home">
            //     <ul>
            //         { modulos.map((mod, idx) => (
            //             <li key={idx}>
            //                 <Card
            //                     icon={ImgBook}
            //                     title={mod.nome}
            //                     detail={detailCard(mod.qtd_aulas)}
            //                     actionTitle="Veja as aulas"
            //                     url={`/modulo/${mod.modulo_id}`}
            //                 />
            //             </li>
            //         ))}

            //         {modulos.length == 0 && (<span>Sem registros</span>) }
            //     </ul>
            // </section>
    )
}
