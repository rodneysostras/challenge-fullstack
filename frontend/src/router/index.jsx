import { Navigate, Routes, Route } from "react-router-dom";

import HomePage from '../pages/home'
import E404Page from '../pages/e404'

import ModuloPage from '../pages/modulo'
import NovoModuloPage from "../pages/modulo/novo";
import EditarModuloPage from "../pages/modulo/editar";

import AulaPage from '../pages/aula'

export default function Router() {
    return (
        <Routes>
            <Route path="*" element={ <E404Page/> } />
            <Route path="/" element={ <HomePage/> } />
            <Route path="/e404" element={ <E404Page/> } />

            <Route path="/modulo" element={ <Navigate to="/" /> } />
            <Route path="/modulo/novo" element={ <NovoModuloPage /> } />
            <Route path="/modulo/editar/:id" element={ <EditarModuloPage /> } />
            <Route path="/modulo/:id" element={ <ModuloPage/> } />

            <Route path="/aula" element={ <Navigate to="/aula/listar" /> } />
            <Route path="/aula/listar" element={ <AulaPage.List /> } />
            <Route path="/aula/novo/" element={ <AulaPage.New /> } />
            <Route path="/aula/editar/:id" element={ <AulaPage.Edit /> } />

        </Routes>
    )
}
