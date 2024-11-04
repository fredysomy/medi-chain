import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import View from "./pages/Viewprofile"
import Firstpage from "./pages/Landingpage"

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Viewprofile" element={<View/>} />
          <Route path="/landingpage" element={<Firstpage/>} />
        
        
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
