import Select from 'react-select'

import './styles.scss'

export default function SelectBox(props) {
    const {error, disabled, onChange, options, value, placeholder} = props

    const customStyles = {
        container: () => ({
            width: '100%',
            backgroundColor: 'inherit',
            border: 0,
            borderRadius: 'inherit',
        }),
        control: () => ({
            display: 'flex',
            flexWrap: 'wrap',
            padding: '.5rem',
            border: 0,
        })
    }

    return (
        <label className={`selectbox ${disabled ? 'disabled' : ''}`}>
            <Select
                styles={customStyles}
                options={options}
                onChange={onChange}
                value={value}
            />
            <span>{ placeholder }</span>
            <div>{ error }</div>
        </label>
    )
}
