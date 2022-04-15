import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../components/card'
import LayoutPage from '../../components/layout/page'

import AulaService from '../../services/aula-service'

import ImgPlay from '../../assets/img/play.svg'
import ImgCalendar from '../../assets/img/calendar.svg'
import ImgClock from '../../assets/img/clock.svg'
import ImgPlus from '../../assets/img/file-circle-plus.svg'

import './styles.scss'

export default function AulaPage() {
    const [aulas, setAulas] = React.useState([])

    const navigation = [
        {"inicio": "/"},
        {"aula": "/"},
        "lista"
    ]

    const DetailCard = (text) => {
        const dt = new Date(text)
        return (
            <>
             <p><img src={ImgCalendar}/> {dt.toLocaleDateString()}</p>
             <p><img src={ImgClock}/> { dt.toLocaleTimeString().slice(0, 5) } hs</p>
            </>
        )
    }

    React.useEffect(() => {
        AulaService.list()
            .then((data) => setAulas(data))
    }, [])

    return (
        <LayoutPage
            title="Lista de Aula"
            breadcrumbs={navigation}
        >
            <div className="page__aula">
                <ul className="page__aula__actions">
                    <li><Link to="/aula/novo"><img src={ImgPlus}/>Nova Aula</Link></li>
                </ul>
                <ul className="page__aula__content">
                    { aulas && aulas.map((aula, idx) => (
                        <li key={idx}>
                            <Card
                                icon={ImgPlay}
                                title={aula.nome}
                                detail={DetailCard(aula.estreia)}
                                actionTitle="Editar"
                                url={`/aula/editar/${aula.aula_id}`}
                            />
                        </li>
                    )) }
                </ul>
                <small>Total de aulas: {aulas.length}</small>
            </div>
        </LayoutPage>
    )
}
