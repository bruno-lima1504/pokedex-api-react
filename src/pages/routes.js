import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Details } from '../components/details/details'
import { Pokedex } from '../components/pokedex/pokedex'
import { NotFound } from './notfound/notfound'


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>  
                <Route exact path='/' element={<Pokedex />} />                
                <Route path='/details/:name' element={<Details />} />
                <Route exact path='/notfound' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }