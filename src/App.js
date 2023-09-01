import './App.css';
import {StyledContainer} from './components/Styles';
import Home from './pages/Home';
import Login from "./pages/Login";
import { Navbar } from './components/Navbar';
import { Signup } from './components/Signup';
import { useForm } from 'react-hook-form';

import{ BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Routes>
          <Route path="/dashboard" element={<Navbar />} />
        </Routes>
    <StyledContainer>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </StyledContainer>
    </Router>
    </>
   ); 
}

export default App;
