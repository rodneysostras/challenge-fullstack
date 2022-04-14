import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import TextField from '../../components/textfield'
import Alert from '../../components/alert'

import LayoutModuloPage from '../../components/layout/page'

import ModuloService from '../../services/modulo-service'

import './styles-shared.scss'

export default function EditarModuloPage() {
    const { id } = useParams()
    const navegate = useNavigate()
    const [ buttonDisabled, setButtonDisabled ] = React.useState(true)
    const [ modulo, setModulo ] = React.useState({})
    const [ error, setError ] = React.useState({})

    const navigation = [
        {"inicio": "/"},
        {"módulo": "/"},
        "novo"
    ]

    const handleSubmit = () => {
        setButtonDisabled(true)

        const message_success = {'state': { "novo": ["Registro adicionado com sucesso!"] }}

        ModuloService.create( { nome: modulo.nome } )
            .then((data) => navegate(`/modulo/editar/${data.modulo_id}`, message_success))
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

    return (
        <LayoutModuloPage
            title="Novo Módulo"
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
                        <button onClick={handleSubmit} disabled={buttonDisabled}>CRIAR</button>
                    </div>
                </div>
                { error && (<Alert value={error} error/>) }
            </form>
        </LayoutModuloPage>
    )
}
