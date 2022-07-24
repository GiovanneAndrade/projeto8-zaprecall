import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import styles from "./style/style.css";

import Pg1 from './Pg1'
import Pg2 from './Pg2'

function App() {  
  return(
    
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Pg1/>}/>
        <Route path="/pag2" element={<Pg2/>}/>
    </Routes>
    
    </BrowserRouter>
  
  
  )
}
export default App