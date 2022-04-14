import './styles.scss'

export default function Alert(props) {
    const { value, success, error } = props
    let typeStyle = success ? ' success' : ''
    typeStyle += error ? ' error' : ''

    return Object.keys(value).map((key) => (
        <div className={`alert ${typeStyle}`} key={key}>
            <span>{key}</span>
            <ol>
                { value[key] && value[key].map((value, idx) => (
                    <li key={idx}>{ value }</li>
                )) }
            </ol>
        </div>
    ))
}
