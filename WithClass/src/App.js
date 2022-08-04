import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Components/Auth/UserContext';
import Router from './Components/ComponentsRoute/Router';
import Footer from './Components/Paginas/Footer';

function App() {
  return (
    <BrowserRouter>
    <UserProvider>
        <Router />
        <Footer/>
    </UserProvider>
  </BrowserRouter>
  );
}

export default App;
