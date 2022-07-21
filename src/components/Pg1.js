import { Link} from "react-router-dom"

import React, { useState } from "react"
import Pg2 from "./Pg2";
import {IoPlayOutline}   from "react-icons/io5";





function Pg1(props) {
  const [selected, setSelected] = useState(false) 
  
  return (
    
    <>
     {/*  <Link to={'/'}>
        <div className="pergunta">anterior</div>
      </Link> */}
      { !selected ?<div className="indice"> <p>iniciar</p><  IoPlayOutline onClick={() => setSelected(true)} /></div>:<Pg2 indice={props.indice} pergunta={props.pergunta} reposta={props.reposta}/>}
      
    </>
  )
}
export default Pg1