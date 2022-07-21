import { Link} from "react-router-dom"
import {IoPlayOutline}   from "react-icons/io5";
import React, { useState } from "react"
import Resposta from "./Resposta";



function Pergunta(props) {
  
  const [selected, setSelected] = useState(false) 
  return (
  <>
     <>
        {!selected ?<div className="pergunta"><p>{props.pergunta}</p> <IoPlayOutline onClick={() => setSelected(true)}/> </div>:<Resposta indice={props.indice} pergunta={props.pergunta} reposta={props.reposta}/>}
      </>
      
  </>
  )
}
export default Pergunta