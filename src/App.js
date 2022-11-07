import './App.css';
import { createGlobalStyle } from 'styled-components';
import { AppRoutes } from './pages/routes';
import { ThemeProvider } from './contexts/theme-context'


function App() {
  return (      
  <> 
    <ThemeProvider>        
        <GlobalStyle />                   
        <AppRoutes />
    </ThemeProvider>   
  </>

  );
}

export {App};


const GlobalStyle = createGlobalStyle`
   * {font-family: 'Lato', sans-serif;
  box-sizing: border-box; 
  margin: 0; 
  padding: 0;}
    
`


