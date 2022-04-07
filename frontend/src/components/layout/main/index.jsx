import './styles.scss'

export default function MainLayout({children}) {
    return (
        <article className='layout-wrap'>
            <main className='layout-container'>
                {children}
            </main>
        </article>
    )
}