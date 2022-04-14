import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Alert from '../../components/alert'
import LayoutPage from '../../components/layout/page'
import TextField from '../../components/textfield'
import Selectbox from '../../components/selectbox'

import AulaService from '../../services/aula-service'
import ModuloService from '../../services/modulo-service'

export default function EditarAulaPage() {
    const { id } = useParams()
    const navegate = useNavigate()
    const [ buttonDisabled, setButtonDisabled ] = React.useState(true)
    const [ aula, setAula ] = React.useState({})
    const [ moduloLista, setModuloLista ] = React.useState([])
    const [ error, setError ] = React.useState({})

    const navigation = [
        {"inicio": "/"},
        {"aula": `/aula`},
        "novo"
    ]

    const handleSubmit = () => {
        setButtonDisabled(true)

        const message_success = {'state': { "novo": ["Registro adicionado com sucesso!"] }}
        const message_field_requered = ["Este campo é obrigatório."]

        if(!aula['modulo']) {
            return setError({"modulo": message_field_requered})
        } else if(!aula['estreia']) {
            return setError({"estreia": message_field_requered})
        } else if(!aula['nome']) {
            return setError({"nome": message_field_requered})
        }

        AulaService.create( aula )
            .then((data) => navegate(`/aula/editar/${data.aula_id}`, message_success))
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
                    <button onClick={handleSubmit} disabled={buttonDisabled}>CRIAR</button>
                </div>
                <br />
                { error && (<Alert value={error} error/>) }
            </form>
        </LayoutPage>
    )
}
