import './styles.scss'

export default function Modal(props) {
    const { show, children, title } = props

    return (
        <div className={ `modal ${show ? 'show' : ''}` }>
            <div className="modal-wrap">
                <header>
                    <h3>{ title }</h3>
                </header>
                <main className="modal-content">
                    { children }
                </main>
            </div>
        </div>
    )
}
