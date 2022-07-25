import {IoPlayOutline}   from "react-icons/io5";
import {IoCheckmarkCircleSharp, IoCloseCircle} from "react-icons/io5"
import React, { useState } from "react"
import Pergunta from "./Pergunta";
import Pg2 from "./Pg2";
import Footer from "./Footer";
import {MdHelp} from "react-icons/md";


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
    return `Putz...  Ainda faltam alguns...Mas não desanime! `
  }if (props.iconeSelecionado.length ===  props.arrayLista && props.iconeSelecionado.includes("verde")){
    return "Parabéns! Você não esqueceu de nenhum flashcard!"
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
        <p className="resposta">{props.reposta}</p>
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
    <Footer>
    
      
    <div className="indices">
   
   
    <p className="p-resposta">{Foot()}</p>
    <div className="icones-resposta ">
      {props.iconeSelecionado.map((icone)=>(
          icone === 'vermelho' &&   <  IoCloseCircle className="verm"/> 
        ))}
        {props.iconeSelecionado.map((icone)=>(
          icone === 'amarelo' &&   <MdHelp className="amar"/> 
        ))}
        {props.iconeSelecionado.map((icone)=>(
          icone === 'verde' &&    <IoCheckmarkCircleSharp className="ver"/> 
        ))}
    </div>
     
  
    </div>
   
    </Footer>
    </>
  )
}
export default Resposta