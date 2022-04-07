import './styles.scss'

export default function HomePage() {
    return (
            <section className="page__home">
                <ul>
                    {Array.apply(null, {length: 10}).map((i) => (
                        <li className='card-itens' key={i}>{i}</li>
                    ))}
                </ul>
            </section>
    )
}