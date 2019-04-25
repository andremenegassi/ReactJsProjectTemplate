
import React from 'react';


export default  function MainLayoutHeader(props){

    let html =  
            <header>
               <img className="logo" src="/imagens/react.png" alt="logo" /> 
               <div>Aprendendo ReactJS</div>
               <div>{props.conta}</div>
            </header>

    return (html);
}



