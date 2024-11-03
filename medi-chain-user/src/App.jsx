import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import LandingPage from './pages/Landingpage';
import AllRecords from './pages/allRecord';
import Navbar from './components/navbar';
function App() {

  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/landing" element={<LandingPage/>} />
          <Route path="/allrecords" element={<AllRecords/>} />
        
        
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
