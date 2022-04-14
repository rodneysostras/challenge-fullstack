import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import Alert from '../../components/alert'
import LayoutPage from '../../components/layout/page'
import Modal from  '../../components/modal'
import TextField from '../../components/textfield'
import Selectbox from '../../components/selectbox'

import AulaService from '../../services/aula-service'
import ModuloService from '../../services/modulo-service'

// import './styles-shared.scss'

export default function EditarAulaPage() {
    const { id } = useParams()
    const navegate = useNavigate()
    const location = useLocation()
    const [ buttonDisabled, setButtonDisabled ] = React.useState(true)
    const [ showModal, setShowModal ] = React.useState(false)
    const [ aula, setAula ] = React.useState({})
    const [ moduloLista, setModuloLista ] = React.useState([])
    const [ error, setError ] = React.useState({})
    const [ message, setMessage ] = React.useState(() => location.state)

    const navigation = [
        {"inicio": "/"},
        {"aula": `/aula`},
        "editar"
    ]

    const handleSubmit = () => {
        setButtonDisabled(true)

        const message_sucess = { "editar": ["Aula editado com sucesso"]}

        AulaService.edit(id, { nome: aula.nome, estreia: aula.estreia, modulo: aula.modulo } )
            .then(() => setMessage(message_sucess))
            .catch(({ data }) => setError(data))
    }

    const handleDelete = () => {
        AulaService.delete(id)
            .then(() => navegate("/aula/listar"))
            .catch(({ data }) => setError(data))
    }

    const handleChange = (event) => {
        const name = event?.target ? event.target.name : 'modulo'
        const value = event?.target ? event.target.value : event.value

        setAula((state) => {
            return { ...state, [name]: value }
        })

        if (buttonDisabled) {
            setButtonDisabled(false)
            setError({})
            setMessage({})
        }

        console.log(aula)
    }

    const formatDatetime = (text) => {
        return text && text.slice(0, 19)
    }


    React.useEffect(() => {
        ModuloService.list()
            .then((data) => {
                let opt = []

                data.forEach((mod) => {
                    opt[mod.modulo_id] = { label: mod.nome, value: mod.modulo_id }
                })

                setModuloLista(opt)
            })

        AulaService.search(id)
            .then((data) => setAula(data))
            .catch((err) => {
                if(err.status === 404) {
                    navegate('/e404')
                }
            })
    }, [])

    return (
        <LayoutPage
            title="Editar Módulo"
            breadcrumbs={navigation}
        >
             <form
                autoComplete="off"
                className="form__container"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="form__fields">
                <TextField type="text" placeholder="Aula ID" defaultValue={aula.aula_id} disabled/>
                <TextField
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        defaultValue={aula.nome}
                        onChange={handleChange}
                        data-val="true"
                        required
                    />
                    <TextField
                        type="datetime-local"
                        name="estreia"
                        placeholder="Estreia"
                        defaultValue={formatDatetime(aula.estreia)}
                        onChange={handleChange}
                        required
                    />
                    <Selectbox
                        placeholder="Módulo"
                        options={moduloLista}
                        onChange={handleChange}
                        value={moduloLista[aula.modulo]}
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

            <Modal title="APAGAR AULA" show={showModal}>
                <p> Deseja apagar o modulo: <b>{ `${aula.aula_id} - ${aula.nome}` }</b> ?</p>
                <div className="actions-container">
                    <button className="btn-delete" onClick={handleDelete}>APAGAR</button>
                    <button onClick={() => setShowModal(false)}>CANCELAR</button>
                </div>
            </Modal>
        </LayoutPage>
    )
}
