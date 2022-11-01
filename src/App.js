import './App.css';
import styled from 'styled-components';
import { AppRoutes } from './pages/routes';

function App() {
  return (      
  <div>          
      <ContentContainer>                     
        <AppRoutes />
      </ContentContainer>
      
  </div>

  );
}

export {App};


const ContentContainer = styled.div`
  font-family: 'Lato', sans-serif;
  
`


