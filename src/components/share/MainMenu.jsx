import React from 'react';
import {Link} from 'react-router-dom';

export default function MainMenu(props){

    let html =  
            <nav className="mainMenu"> 
                <Link className="item" to="/home">HOME</Link> 
                <Link className="item" to="/usuario">USUÁRIO</Link>
                <Link className="item" to="/usuario/pesquisar">PESQUISAR USUÁRIO</Link>
                <a className="item" href="usuario">Link normal</a>
            </nav>

    return (html);
}

