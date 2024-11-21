import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import LandingPage from './pages/Landingpage';
import AllRecords from './pages/allRecord';
import Navbar from './components/navbar';
import Login from "./pages/login";
import Addrecord from "./pages/addrecord"
import ViewRecord from "./pages/viewrecords";
import View from "./pages/Viewprofile";
import Create from "./pages/create";

function App() {
  const location = useLocation();

  // Paths where the Navbar should not be displayed
  const hideNavbarPaths = ['/create', '/login', '/landing'];

  return (
    <div className="App">
      {/* Conditionally render Navbar */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/allrecords" element={<AllRecords />} />
        <Route path="/viewrecord/:id" element={<ViewRecord />} />
        <Route path="/Viewprofile" element={<View />} />
        <Route path="/Addrecord" element={<Addrecord/>} />
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;
