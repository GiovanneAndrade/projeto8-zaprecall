import {IoPlayOutline}   from "react-icons/io5";
import React, { useState } from "react"
import Pergunta from "./Pergunta";
import Footer from "./Footer";
import Image from "../image/image1.png";

function Indice(props) {
  const [selected, setSelected] = useState(false) 
  
  return (
    <>
      {!selected ? 
        (
        <div className="indice"> 
          <p >Pergunta {props.index+1}</p>  <IoPlayOutline className="icon" onClick={() => setSelected(true)} />
        </div>):
        (<Pergunta indice={props.indice} pergunta={props.pergunta} reposta={props.reposta} iconeSelecionado={props.iconeSelecionado}  setIconeSelecionado={props.setIconeSelecionado} arrayLista={props.arrayLista} />)
      }
    </>
  )
}

function Pg2() {

  const [iconeSelecionado, setIconeSelecionado] = useState([])
  let [flashcardsSorteds, setFlashcardsSorteds] = useState([])

  const lista = 
  [
    {
    indice: "pergunta", 
    pergunta: "O que é JSX?", 
    reposta: " Uma extensão de linguagem do JavaScript"
    },
    {
    indice: "pergunta", 
    pergunta: "O React é __ ",
     reposta: "uma biblioteca JavaScript para construção de interfaces"
    }, 
    {
      indice: "pergunta",
       pergunta: "Componentes devem iniciar com __ ", 
       reposta: "letra maiúscula "
    },
    {
      indice: "pergunta" ,
       pergunta: "Podemos colocar __ dentro do JSX ", 
       reposta: "expressões "
    },
   
   
  ];
  
function Aleatorio (){
  return Math.random()-0.5
}
if (flashcardsSorteds.length===0){
  lista.sort(Aleatorio)
 setFlashcardsSorteds(lista)
  return<></>
}else{
  let arrayLista = lista.length
  let arrayIconeSelecionado=iconeSelecionado.length
  console.log(arrayLista)
  return (
    <>
      <div className="zaprecall-pg2">
      <img src={Image} />
        <h1>ZapRecall</h1>
       
      </div>
      {flashcardsSorteds.map((item, index) =>(
        <Indice key={index}  index={index} indice={item.indice} pergunta={item.pergunta} reposta={item.reposta} iconeSelecionado={iconeSelecionado} setIconeSelecionado={setIconeSelecionado} arrayLista={arrayLista}  />)
      )}
      <Footer arrayLista={arrayLista} arrayIconeSelecionado={arrayIconeSelecionado} iconeSelecionado={iconeSelecionado}/>
    </>
  )
      }
}
export default Pg2