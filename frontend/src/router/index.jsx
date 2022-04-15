import { Routes, Route } from "react-router-dom";

import PrivateRoute from './private-route'

import E404Page from '../pages/e404'
import HomePage from '../pages/home'
import LoginPage from '../pages/login'

import ModuloPage from '../pages/modulo'
import AulaPage from '../pages/aula'

export default function Router() {
    return (
        <Routes>
            <Route index element={ <HomePage/> } />
            <Route path="*" element={ <E404Page/> } />
            <Route path="/e404" element={ <E404Page/> } />
            <Route path="/login" element={ <LoginPage /> } />

            <Route path="/modulo" element={ <ModuloPage.List /> } />
            <Route path="/modulo/:id" element={ <ModuloPage.View/> } />
            <Route path="/aula" element={ <AulaPage.List /> } />

            <Route element={ <PrivateRoute /> }>
                <Route path="/modulo/editar/:id" element={ <ModuloPage.Edit /> } />
                <Route path="/modulo/novo" element={ <ModuloPage.New /> } />

                <Route path="/aula/editar/:id" element={ <AulaPage.Edit /> } />
                <Route path="/aula/novo/" element={ <AulaPage.New /> } />
            </Route>
        </Routes>
    )
}
