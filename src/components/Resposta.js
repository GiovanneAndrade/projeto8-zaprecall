import {IoPlayOutline}   from "react-icons/io5";
import React, { useState } from "react"
import Pergunta from "./Pergunta";
import Pg2 from "./Pg2";


function Resposta(props) {
  const [vermelha, setVermelha] = useState(false) 
  const[amarela, setAmarela] = useState(false)
  const [verde, setVerde] = useState(false)
  let icones = []
  const iconesAntigos = [...icones]
  function ClicouVermelho (){
    setVermelha (true)
    icones.push("vermelho")
    console.log(icones)
  }
  return ( 
    
    <>
     {!vermelha && !verde && !amarela?(
      <>
        <div className="pergunta">
          {props.resposta}
            <div className="escolha"> 
              
            {!vermelha ? <p className="escolha-vermelha" onClick={ClicouVermelho}>Não lembrei</p>: null}
              
            {!amarela ? <p className="escolha-amarela" onClick={() => setAmarela(true)}>Quase nâo lembrei</p>:null}
                
            {!verde ?  <p className="escolha-verde" onClick={() => setVerde(true)}>Zap!</p>:null}
            </div>
            
        </div> 
      </> ):
      <div className="indice">
        {vermelha && <div className="btn-vermelha"> pergunta {props.indice}</div> }
        {verde && "verde"}
        {amarela && "amarela"}
      </div>}
    </>
  )
}
export default Resposta