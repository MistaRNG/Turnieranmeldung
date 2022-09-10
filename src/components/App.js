import React from "react";
import "./App.scss"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ParticipationForm from "./ParticipationForm"
import Home from "./Home"


function App() {

   return <div>

      <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/ParticipationForm" element={<ParticipationForm />}></Route>
        </Routes>
        </Router>  
         
    </div>

}

export default App;