import {IoPlayOutline}   from "react-icons/io5";
import React, { useState } from "react"
import Pergunta from "./Pergunta";

function Indice(props) {
  const [selected, setSelected] = useState(false) 
  
  return (
    <>
      {!selected ? 
        (
        <div className="indice"> 
          Pergunta {props.indice} <IoPlayOutline onClick={() => setSelected(true)} />
        </div>):
        (<Pergunta indice={props.indice} pergunta={props.pergunta} reposta={props.reposta} iconeSelecionado={props.iconeSelecionado}  setIconeSelecionado={props.setIconeSelecionado} arrayLista={props.arrayLista}/>)
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
    indice: "1", 
    pergunta: "JSX é uma sintaxe para escrever HTML dentro do JS", 
    reposta: " sim"
    },
    {
    indice: "2", 
    pergunta: "quem nasceu primeiro",
     reposta: "a galinha "
    }, 
    {
      indice: "3",
       pergunta: "gatuni ou viroshe ?", 
       reposta: "giga "
    }
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
  console.log(arrayLista)
  return (
    <>
      {flashcardsSorteds.map((item, index) =>(
        <Indice key={index}   indice={item.indice} pergunta={item.pergunta} reposta={item.reposta} iconeSelecionado={iconeSelecionado} setIconeSelecionado={setIconeSelecionado} arrayLista={arrayLista}/>)
      )}
      <div>footer</div>
    </>
  )
      }
}
export default Pg2