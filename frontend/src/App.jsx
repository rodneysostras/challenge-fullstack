import HeaderLayout from './components/layout/header'
import MainLayout from './components/layout/main'
import FooterLayout from './components/layout/footer'

import AuthContextProvider from './context/auth-context'

import Router from './router'

function App() {
    return (
        <AuthContextProvider>
            <HeaderLayout />
            <MainLayout>
            <   Router />
            </MainLayout>
            <FooterLayout />
        </AuthContextProvider>
    )
}

export default App
