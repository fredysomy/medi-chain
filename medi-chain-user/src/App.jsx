import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/login";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login"   element={<Login/>} />
         
          
        
        
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
