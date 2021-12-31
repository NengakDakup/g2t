import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';

// import top level route components
import Home from './pages/Home/';
import Welcome from "./pages/welcome";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          
        <Route path='/' element={<Welcome/> }/>
        <Route path='/home' element={<Home />} />
      
          
        </Routes>   
    </BrowserRouter>
  );
}

export default App;
