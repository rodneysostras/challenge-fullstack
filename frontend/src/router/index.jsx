import { Routes, Route } from "react-router-dom";

import HomePage from '../pages/home'
import ModuloPage from '../pages/modulo'
import E404Page from '../pages/e404'

export default function Router() {
    return (
        <Routes>
            <Route path="*" element={ <E404Page/> } />
            <Route path="/" element={ <HomePage/> } />
            <Route path="/modulo" element={ <HomePage/> } />
            <Route path="/modulo/:id" element={ <ModuloPage/> } />
        </Routes>
    )
}
