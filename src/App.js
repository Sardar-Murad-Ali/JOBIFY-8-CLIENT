
import Landing from './components/Landing';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Register from "./components/Register"
import Dashboard from './components/Dashboard'
import Error from './components/Error'
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/landing" element={<Landing/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="*" element={<Error/>}/>
  
    </Routes>

    </BrowserRouter>
  );
}

export default App;
