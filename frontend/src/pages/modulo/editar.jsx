import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import TextField from '../../components/textfield'
import Modal from  '../../components/modal'
import Alert from '../../components/alert'

import LayoutModuloPage from '../../components/layout/page'

import ModuloService from '../../services/modulo-service'

import './styles-shared.scss'

export default function EditarModuloPage() {
    const { id } = useParams()
    const navegate = useNavigate()
    const location = useLocation()
    const [ buttonDisabled, setButtonDisabled ] = React.useState(true)
    const [ showModal, setShowModal ] = React.useState(false)
    const [ modulo, setModulo ] = React.useState({})
    const [ error, setError ] = React.useState({})
    const [ message, setMessage ] = React.useState(() => location.state)

    const navigation = [
        {"inicio": "/"},
        {"módulo": `/modulo/${id}/`},
        "editar"
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

    const handleSubmit = () => {
        const message_sucess = { "editar": ["Modulo editado com sucesso"]}

        setButtonDisabled(true)

        ModuloService.edit(id, { nome: modulo.nome } )
            .then(() => setMessage(message_sucess))
            .catch(({ data }) => setError(data))
    }

    const handleDelete = () => {
        ModuloService.delete(id)
            .then(() => navegate("/"))
            .catch(({ data }) => setError(data))
    }

    const handleChange = (event) => {
        setModulo((state) => {
            return {...state, nome: event.target.value}
        })

        if (buttonDisabled) {
            setButtonDisabled(false)
            setMessage({})
            setError({})
        }
    }

    return (
        <LayoutModuloPage
            title="Editar Módulo"
            breadcrumbs={navigation}
        >
             <form
                autoComplete="off"
                className="form__container"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="form__fields">
                <TextField type="text" placeholder="Modulo ID" defaultValue={modulo.modulo_id} disabled/>
                    <TextField
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        defaultValue={modulo.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="actions-container">
                    <button onClick={handleSubmit} disabled={buttonDisabled}>EDITAR</button>
                    <a className="button btn-delete" onClick={() => setShowModal(true)}>APAGAR</a>
                </div>
                <br />
                { message && (<Alert value={message} success/>) }
                { error && (<Alert value={error} error/>) }
            </form>

            <Modal title="APAGAR MODULO" show={showModal}>
                <p> Deseja apagar o modulo: <b>{ `${modulo.modulo_id} - ${modulo.nome}` }</b> ?</p>
                <div className="actions-container">
                    <button className="btn-delete" onClick={handleDelete}>APAGAR</button>
                    <button onClick={() => setShowModal(false)}>CANCELAR</button>
                </div>
            </Modal>
        </LayoutModuloPage>
    )
}
