import {
  HashRouter,
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
import FormPage from './pages/form';
import AdminPage from './pages/admin';
import TablePage from "./pages/table";

function App() {
  return (
    <HashRouter>
        <Routes>
          
        <Route path='/' element={<Welcome/> }/>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/form' element={<FormPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/records" element={<TablePage /> } />
        </Routes>   
    </HashRouter>
  );
}

export default App;
