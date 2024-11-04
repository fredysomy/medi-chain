import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import LandingPage from './pages/Landingpage';
import AllRecords from './pages/allRecord';
import Navbar from './components/navbar';
import Login from "./pages/login";
import ViewRecord from "./pages/viewrecords"
import View from "./pages/Viewprofile"
import Firstpage from "./pages/Landingpage"

function App() {

  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/landing" element={<LandingPage/>} />
          <Route path="/allrecords" element={<AllRecords/>} />
          <Route path="/login"   element={<Login/>} />
          <Route path="/viewrecord/:id"   element={<ViewRecord/>} />
          
          <Route path="/Viewprofile" element={<View/>} />
          <Route path="/landingpage" element={<Firstpage/>} />
        
        
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
