import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <MainLayout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </MainLayout>
            </BrowserRouter>
        </>
    )
}

export default AppRouter
