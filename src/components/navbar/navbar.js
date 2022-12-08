import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Button } from './buttonnavbar';
import { ThemeContext, themes } from '../../contexts/theme-context';
import logopoke from '../../assets/logopoke.png'
import * as C from './styles';
 
const Navbar = () => {
    
    const { theme, setTheme } = useContext(ThemeContext)   

    return (
        <C.HeaderContainer>
            
                <img src={logopoke} alt="Logo pokeAPI" />
            
            
            
                <C.Ul>
                    <C.Link to="/">
                        <C.Li>Pokedex</C.Li>
                    </C.Link>
                    <C.Link to="/notfound">
                        <C.Li>Favoritos</C.Li>
                    </C.Link>
                    <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>

                    </Button>
                </C.Ul>
                               
            
        </C.HeaderContainer>
    )
}

export { Navbar }


/* const StyledLink = styled(Link) `
    text-decoration: none;

    :visited {
        color: #FFF;
    }
` */