import './App.css';
import AdminLogin from './Components/AdminLogin';
import LandingPage from './Components/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserLogin from './Components/UserLogin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/userLogin' element={<UserLogin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
