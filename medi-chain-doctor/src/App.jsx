import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Homepage from "./pages/D_Homepage"

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
<<<<<<< HEAD
          <Route path="/" element={<login/>} />
          
=======
          <Route path="/Homepage" element={<Homepage/>} />
>>>>>>> addrecord
        
        
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
