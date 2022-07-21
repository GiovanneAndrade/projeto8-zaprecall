import {IoPlayOutline}   from "react-icons/io5";
import React, { useState } from "react"
import Pergunta from "./Pergunta";


function Resposta(props) {
  
  return (
    
    
      <div className="pergunta">
          <p>{props.resposta}</p>
      </div>
    
  )
}
export default Resposta