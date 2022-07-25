import {GiReturnArrow} from "react-icons/gi"
import React, { useState } from "react"
import Resposta from "./Resposta";

function Pergunta(props) {
  
  const [selected, setSelected] = useState(false)
  
  return (
  <>
    {!selected ? (
      <div className="pergunta">
        <p>{props.pergunta}</p> 
        <GiReturnArrow onClick={() => setSelected(true)}/> 
      </div>):
      (<Resposta 
        indice={props.indice} 
        pergunta={props.pergunta}
        reposta={props.reposta}
        iconeSelecionado={props.iconeSelecionado}
        setIconeSelecionado={props.setIconeSelecionado}
        arrayLista={props.arrayLista }
        
        />)
    } 
  </>
  )
}
export default Pergunta