import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';

// import top level route components
import Home from './pages/Home/';
import Welcome from "./pages/welcome";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Reset from './pages/reset';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          
        <Route path='/' element={<Welcome/> }/>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/dashboard' element={<Dashboard />} />
      
          
        </Routes>   
    </BrowserRouter>
  );
}

export default App;
