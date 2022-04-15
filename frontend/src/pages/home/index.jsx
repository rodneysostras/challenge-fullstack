import { Link } from 'react-router-dom'
import LayoutPage from '../../components/layout/page'

import './styles.scss'

export default function HomePage() {
    const navigation = []

    return (
        <LayoutPage
            title="Página Inicial"
            breadcrumbs={navigation}
        >
            <Link to="/modulo">➤ Página Modulo</Link>
            <br />
            <Link to="/aula">➤ Página Aula</Link>
        </LayoutPage>
    )
}
