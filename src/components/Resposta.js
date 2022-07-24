import {IoPlayOutline}   from "react-icons/io5";
import {IoCheckmarkCircleSharp, IoCloseCircle} from "react-icons/io5"
import React, { useState } from "react"
import Pergunta from "./Pergunta";
import Pg2 from "./Pg2";


function Resposta(props) {
  const [selected, setSelected] = useState(true)
  const [item, setItem] = useState('')

  function itemEscolhido(item) {
    setItem(item)
    props.setIconeSelecionado([...props.iconeSelecionado, item])
    setSelected(false)
  }
  function Foot (){
  if (props.iconeSelecionado.length ===  props.arrayLista && props.iconeSelecionado.includes("vermelho")){
    return "não acertou"
  }if (props.iconeSelecionado.length ===  props.arrayLista && props.iconeSelecionado.includes("verde")){
    return "parabens"
  }if (props.iconeSelecionado.length ===  props.arrayLista && props.iconeSelecionado.includes("amarelo")){
    return "parabens"
  }
}
  console.log(props.iconeSelecionado)
  

  return ( 
    <>
     {selected ?(
      <>
        <div className="pergunta">
          <div className="escolha"> 
            <p className="escolha-vermelha" onClick={() => itemEscolhido('vermelho')}>Não lembrei</p>
            <p className="escolha-amarela" onClick={() => itemEscolhido('amarelo')}>Quase nâo lembrei</p>
            <p className="escolha-verde" onClick={() => itemEscolhido('verde')}>Zap!</p>
          </div>
            
        </div> 
      </> ):
      <div className="indice">
        {item === 'vermelho' && <div className="btn-vermelha"> pergunta {props.indice}<IoCloseCircle/></div> }
        {item === 'amarelo' && <div className="btn-vermelha"> pergunta amarelo{props.indice}</div> }
        {item === 'verde' && <div className="btn-verde"> pergunta verde {props.indice}<IoCheckmarkCircleSharp/></div> }
       
      </div>
      
    }
    <div className="indices">
      {props.iconeSelecionado.map((icone)=>(
        icone === 'vermelho' &&  <div className="verm"><IoCloseCircle/></div> 
      ))}
      {props.iconeSelecionado.map((icone)=>(
        icone === 'amarelo' &&  <div className="ver"><IoCheckmarkCircleSharp/></div> 
      ))}
      {props.iconeSelecionado.map((icone)=>(
        icone === 'verde' &&  <div className="amar"><IoCheckmarkCircleSharp/></div> 
      ))}
       {props.iconeSelecionado.length ===  props.arrayLista && <div className="btn-vermelha"> ola mundo  </div> }
      
      {Foot()}
       
        
      </div>
    </>
  )
}
export default Resposta