import './styles.scss'

export default function TextField( props ) {
    const { error, disabled, name, placeholder, type } = props
    const suffix = Math.floor(1000 + Math.random() * 9000);
    return (
        <label htmlFor={ name + suffix } className={`textfield ${disabled ? 'disabled' : ''}`}>
            <input
                { ...props }
                id={ name + suffix }
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
