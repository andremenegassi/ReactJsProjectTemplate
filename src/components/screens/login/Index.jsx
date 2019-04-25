import React from  "react";
import { Redirect } from 'react-router-dom';

import UsuarioModel from "../../../models/Usuario.model";

export default class Index extends React.Component{

    constructor(){

        super();

        this.state = {

            email:"",
            senha: "",
            redirect : false,
            msg : ""
        }
    }

    async entrarOnClick(){

       let u = new UsuarioModel(null, this.state.email, this.state.senha);
       let ok = await u.validarUsuario();
       if (!ok)
       {
            this.setState({
                msg: "Dados inválidos"
            });
       }
       else {
            this.setState({
                redirect: true
            });
        }

    }

    render(){

        let msg = ""
        if (this.state.msg !== "")
        {
            msg = <div>{this.state.msg}</div>
        }



        let html = 
        
            <div>
                <header style={{marginTop:50, marginBottom:50}}>
                    <img className="logo" src="/imagens/react.png" alt="logo" style={{width: 200}} /> 
                    <div>Aprendendo ReactJS</div>
                </header>

                <div style={{textAlign: "center", padding:100, backgroundColor:"#222222", color: "#fff", margin: "0 auto"}}>
                    <h1>Autenticação</h1>

                    <div style={{margin: "0 auto"}}>

                        <input type="text" placeholder="e-mail" value={this.state.email} onChange={(evt) => this.setState({email: evt.target.value})} />
                        <input type="password" placeholder="senha" onChange={(evt) => this.setState({senha: evt.target.value})} /> 

                        <input type="button" value="entrar" onClick={this.entrarOnClick.bind(this)} />

                        {msg}
                    </div>
                </div>
            </div>

        if (this.state.redirect)
        {
            html = <Redirect to={"/home"} />;
        }

        
        return html;

    }
}