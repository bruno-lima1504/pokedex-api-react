import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Details } from '../components/details/details'
import { Pokedex } from '../components/pokedex/pokedex'


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>  
                <Route exact path='/' element={<Pokedex />} />                
                <Route path='/details/:name' element={<Details />} />                
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }