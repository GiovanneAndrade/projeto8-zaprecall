import { Link} from "react-router-dom"

import React, { useState } from "react"
import Pg2 from "./Pg2";
import {IoPlayOutline}   from "react-icons/io5";
import Image from "../image/image1.png";


function Pg1(props) {
  const [selected, setSelected] = useState(false) 
  
  return (
    <>
     
      { !selected ? ( <>  <img className="img-pg1" src={Image}/> <h1 className="h1-pg1">ZapRecall</h1> <div className="indice"  onClick={() => setSelected(true)}>

         <p className="iniciar">Iniciar Recall!</p> 
        
      </div> </>): 
      <Pg2 />}
    </>
  )
}
export default Pg1