import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/login";
import Create from "./pages/create";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login"   element={<Login/>} />
          <Route path="/create"  element={<Create/>} />
         
          
        
        
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
