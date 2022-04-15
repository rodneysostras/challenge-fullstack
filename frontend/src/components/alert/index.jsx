import './styles.scss'

export default function Alert(props) {
    const { error, value, success } = props
    var alertColor = success && 'success' || error && 'error'

    const box = (title, value) => {
        const list = (value) => (<li>{ value }</li>)

        return (
            <div className={ `alert ${alertColor || ''}` }>
                <span>{title}</span>
                <ol>
                    { typeof value === 'string' &&  list(value) }
                    { Array.isArray(value) && value.map((v) => list(v) ) }
                </ol>
            </div>
        )
    }

    return (
        <>
            { Array.isArray(value) && value.map((v) => box("", v)) }
            { typeof value === 'string' && box("", value) }
            { typeof value === 'object' && Object.keys(value).map((k) => box(k, value[k])) }
        </>
    )
}
