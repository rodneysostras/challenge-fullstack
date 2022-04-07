import { Routes, Route } from "react-router-dom";

import HomePage from '../pages/home'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={ <HomePage/> } />
        </Routes>
    )
}