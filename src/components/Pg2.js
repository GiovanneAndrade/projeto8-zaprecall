
import { Link} from "react-router-dom"
import {IoPlayOutline}   from "react-icons/io5";
import React, { useState } from "react"
import Pergunta from "./Pergunta";

function Indice(props) {
  const [selected, setSelected] = useState(false) 
  
  return (
    <>
      { !selected ?<div className="indice"> Pergunta{props.indice} <  IoPlayOutline onClick={() => setSelected(true)} /></div>:<Pergunta indice={props.indice} pergunta={props.pergunta} reposta={props.reposta} />}
    
    </>
  )


  
}


function Pg2() {
  const lista = [{indice: "1", pergunta: "JSX é uma sintaxe para escrever HTML dentro do JS", reposta: "resposta certa "},
  {indice: "2", pergunta: "ola", reposta: "boa "}, {indice: "2", pergunta: "ola", reposta: "boa "}];
  
   
  return (
    <>
      {lista.map((item) =>(<Indice indice={item.indice} pergunta={item.pergunta} reposta={item.reposta}/>))}
      
    </>
  )
}
export default Pg2 