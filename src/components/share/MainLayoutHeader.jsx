
import React from 'react';

import { connect } from 'react-redux';

function MainLayoutHeader(props){

    let html =  
            <header>
               <img className="logo" src="/imagens/react.png" alt="logo" /> 
               <div>Aprendendo ReactJS</div>
               <div>{props.conta}</div>
            </header>

    return (html);
}


const mapStateToProps = (state) => {
    return {conta: state.conta}
 };

export default connect(mapStateToProps)(MainLayoutHeader);







/*

import React from 'react';



export default function MainLayoutHeader(props){

    let html =  
            <header>
               <img className="logo" src="/imagens/react.png" alt="logo" /> 
               <div>Aprendendo ReactJS</div>
            </header>

    return (html);
}*/
