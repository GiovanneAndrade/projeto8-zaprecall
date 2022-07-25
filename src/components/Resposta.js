import {IoPlayOutline}   from "react-icons/io5";
import {IoCheckmarkCircleSharp, IoCloseCircle} from "react-icons/io5"
import React, { useState } from "react"
import Pergunta from "./Pergunta";
import Pg2 from "./Pg2";
import Footer from "./Footer";
import {MdHelp} from "react-icons/md";
import Image from "../image/vector.png";
import party from "../image/party 2.png";
import sad from "../image/sad 7.png";


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
    return   (<> <p className="p-foot"><img src={sad} /> <span> Putz...não desanime!</span></p>
    </>)        
  }if (props.iconeSelecionado.length ===  props.arrayLista && props.iconeSelecionado.includes("verde")){
    return (<> <p className="p-foot"><img src={party} /> <span> Parabéns...Acertou!</span></p>
    </>)      
  }if (props.iconeSelecionado.length ===  props.arrayLista && props.iconeSelecionado.includes("amarelo")){
    return (<> <p className="p-foot"><img src={party} /> <span> Parabéns...Acertou!</span></p>
    </>)    
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
        {item === 'vermelho' && <div className="btn-vermelha"> <p>pergunta  {props.indice}</p><IoCloseCircle className="indice-icone"/></div> }
        {item === 'amarelo' && <div className="btn-amarelo"> <p>pergunta {props.indice}</p> <MdHelp className="indice-icone"/></div> }
        {item === 'verde' && <div className="btn-verde"> <p>pergunta {props.indice} </p>  <IoCheckmarkCircleSharp className="indice-icone"/></div> }
       
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