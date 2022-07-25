import React, { useState } from "react"
export default function Footer(props){
  return (
    < >
    {props.children}
    <div className="footer">
    
       <p>{props.arrayIconeSelecionado}/{props.arrayLista}</p>
     
   
       </div> 
       
       

    </>
  )
}