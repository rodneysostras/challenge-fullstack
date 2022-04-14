import { Navigate, Routes, Route } from "react-router-dom";

import HomePage from '../pages/home'
import E404Page from '../pages/e404'
import ModuloPage from '../pages/modulo'
import NovoModuloPage from "../pages/modulo/novo";
import EditarModuloPage from "../pages/modulo/editar";

export default function Router() {
    return (
        <Routes>
            <Route path="*" element={ <E404Page/> } />
            <Route path="/e404" element={ <E404Page/> } />
            <Route path="/" element={ <HomePage/> } />
            <Route path="/modulo" element={ <Navigate to="/" /> } />
            <Route path="/modulo/novo" element={ <NovoModuloPage /> } />
            <Route path="/modulo/editar/:id" element={ <EditarModuloPage /> } />
            <Route path="/modulo/:id" element={ <ModuloPage/> } />
        </Routes>
    )
}
