import './styles.scss'

export default function TextField( props ) {
    const { error, disabled, name, placeholder, type } = props
    return (
        <label htmlFor={ 'lbl-' + name } className={`textfield ${disabled ? 'disabled' : ''}`}>
            <input
                { ...props }
                id={ 'lbl-' + name }
                name={ name }
                type = { type }
                placeholder=" "
                disabled={disabled}
            />
            <span>{ placeholder }</span>
            <div>{ error }</div>
        </label>
    )
}
