import { Link} from "react-router-dom"

import React, { useState } from "react"
import Pg2 from "./Pg2";
import {IoPlayOutline}   from "react-icons/io5";


function Pg1(props) {
  const [selected, setSelected] = useState(false) 
  
  return (
    <>
      { !selected ? <div className="indice"> <p>Iniciar Recall!</p><IoPlayOutline onClick={() => setSelected(true)}/></div> : 
      <Pg2 />}
    </>
  )
}
export default Pg1