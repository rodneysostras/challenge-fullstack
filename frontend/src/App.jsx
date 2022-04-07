import HeaderLayout from './components/layout/header'
import MainLayout from './components/layout/main'
import FooterLayout from './components/layout/footer'

import Router from './router'

function App() {
  return (
    <>
      <HeaderLayout />
      <MainLayout>
        <Router />
      </MainLayout>
      <FooterLayout />
    </>
  )
}

export default App
