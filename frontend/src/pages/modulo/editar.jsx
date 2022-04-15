import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import useAuth from '../../hooks/auth-hooks'

import Alert from '../../components/alert'
import Modal from  '../../components/modal'
import TextField from '../../components/textfield'

import LayoutModuloPage from '../../components/layout/page'

import ModuloService from '../../services/modulo-service'

export default function EditarModuloPage() {
    const { id } = useParams()
    const navegate = useNavigate()
    const location = useLocation()
    const { signed } = useAuth()
    const [ buttonDisabled, setButtonDisabled ] = React.useState(true)
    const [ showModal, setShowModal ] = React.useState(false)
    const [ modulo, setModulo ] = React.useState({})
    const [ error, setError ] = React.useState({})
    const [ message, setMessage ] = React.useState(() => location.state)

    const navigation = [
        {"inicio": "/"},
        {"módulo": "/modulo"},
        "Editar"
    ]

    const handleSubmit = () => {
        setButtonDisabled(true)

        const message_success = {'state': { "novo": ["Registro adicionado com sucesso!"] }}

        ModuloService.edit(modulo.modulo_id, { nome: modulo.nome } )
            .then((data) => setMessage(message_sucess))
            .catch(({ data }) => setError(data))
    }

    const handleChange = (event) => {
        setModulo((state) => {
            return {...state, nome: event.target.value}
        })

        if (buttonDisabled) {
            setButtonDisabled(false)
            setError({})
        }
    }

    const handleDelete = () => {
        ModuloService.delete(id)
            .then(() => navegate("/modulo"))
            .catch((err) => {
                if(err.status === 401) {
                    navegate("/auth")
                }

                setError( {"APAGAR": [err.data.detail]} )
                setShowModal(false)
            })
    }

    React.useEffect(() => {
        ModuloService.search(id)
            .then((data) => setModulo(data))
            .catch((err) => {
                if(err.status === 404) {
                    navegate('/e404')
                }
            })
        },[])

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
                    <TextField
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        defaultValue={modulo.nome}
                        onChange={handleChange}
                        required
                    />
                    <div className="actions-container">
                        <button onClick={handleSubmit} disabled={buttonDisabled}>EDITAR</button>
                        <a className="button btn-delete" onClick={() => setShowModal(true)}>APAGAR</a>
                    </div>
                </div>
                { message && (<Alert value={message} success/>) }
                { error && (<Alert value={error} error/>) }
            </form>

            <Modal title="APAGAR MODULO" show={showModal}>
                <p> Deseja apagar o modulo: <b>{ `${modulo.modulo_id} - ${modulo.nome}` }</b> ?</p>
                <div className="actions-container">
                    <button className="btn-delete" onClick={handleDelete}>APAGAR</button>
                    <button onClick={() => setShowModal(false)}> CANCELAR</button>
                </div>
            </Modal>
        </LayoutModuloPage>
    )
}
