import {GiReturnArrow} from "react-icons/gi"
import React, { useState } from "react"
import Resposta from "./Resposta";
import Image from "../image/vector.png";

function Pergunta(props) {
  
  const [selected, setSelected] = useState(false)
  
  return (
  <>
    {!selected ? (
      <div className="pergunta">
        <div className="pergunta-texto">
          <p>{props.pergunta}</p> 
         
          <img className="icone-pergunta" src={Image} onClick={() => setSelected(true)} />
        </div>
       
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