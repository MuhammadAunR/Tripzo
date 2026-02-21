import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Destinations from '../pages/Destinations'
import DestinationDetails from '../pages/DestinationDetails'

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/destinations/destinationDetails/:placeName' element={<DestinationDetails />} />
                        <Route path='/destinations' element={<Destinations />} />
                        
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter
