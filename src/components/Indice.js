import Resposta from "./Resposta"
import Pergunta from "./Pergunta"
import React, { useState } from "react"
function Indice(props) {
  const [selected, setSelected] = useState(false) 
  return (
    <>
      { !selected ? <div className="indice"> Pergunta{props.indice} <button onClick={() => setSelected(true)}> enviar</button>
      </div>: 
      <Pergunta indice={props.indice} pergunta={props.pergunta} reposta={props.reposta }itemEscolhido={props.itemEscolhido} arrayLista={props.arrayLista} />} 
    </>
  )
} 

export default Indice
