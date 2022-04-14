import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import PageLayout from '../../components/layout/page'
import Modal from '../../components/modal'

import ModuloService from '../../services/modulo-service'

import './styles.scss'

export default function ModuloPage() {
    const { id } = useParams()
    const navegate = useNavigate()
    const [modulo, setModulo] = React.useState({})
    const [ showModal, setShowModal ] = React.useState(false)

    const navigation = [
        {"inicio": "/"},
        {"módulo": "/"},
        "ver"
    ]

    React.useEffect(() => {
        ModuloService.search(id)
            .then((data) => setModulo(data))
            .catch((err) => {
                if(err.status === 404) {
                    navegate('/e404')
                }
            })
    }, [])

    const handleDelete = () => {
        ModuloService.delete(id)
            .then(() => navegate("/"))
            .catch(({ data }) => setError(data))
    }

    return (
        <PageLayout
            title="Ver Módulo"
            breadcrumbs={navigation}
        >
            <div className="page__modulo__wrap">
                <div className="page__modulo_content">
                    <div className="info">
                        <h1>{ modulo.nome }</h1>
                        <p>
                            { modulo.aulas?.length || 0 }
                            { modulo.aulas?.length > 1 ? " Aulas" : " Aula" }
                        </p>
                    </div>
                    { modulo.aulas && modulo.aulas.map((aula, idx) => (
                        <p key={idx}>{ aula.nome }</p>
                    ))}
                    { modulo.aulas && modulo.aulas.length == 0 && (<span>Nenhuma aula cadastrada</span>)}
                </div>
            <div className="actions-container">
                    <a className="button" onClick={() => navegate(`/modulo/editar/${id}`)}>EDITAR</a>
                    <a className="button btn-delete" onClick={() => setShowModal(true)}>APAGAR</a>
            </div>
            </div>
            <Modal title="APAGAR MODULO" show={showModal}>
                <p> Deseja apagar o modulo: <b>{ `${modulo.modulo_id} - ${modulo.nome}` }</b> ?</p>
                <div className="actions-container">
                    <button className="btn-delete" onClick={handleDelete}>APAGAR</button>
                    <button onClick={() => setShowModal(false)}>CANCELAR</button>
                </div>
            </Modal>
        </PageLayout>
    )
}
