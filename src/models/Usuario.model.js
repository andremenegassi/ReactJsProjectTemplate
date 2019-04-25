import {ajaxAsync} from '../utils/Ajax'

export default class Usuario {


    constructor(nome, email, senha){

        this.nome = "";
        this.email = "";
        this.senha = "";

        if (nome != null) {
            this.nome = nome;
        }
        
        if (email != null) {
            this.email = email;
        }

        if (senha != null) {
            this.senha = senha;
        }
    }

    async validarUsuario(){

        //return this.email === "a@a" && this.senha === "123";
        let retorno = false;

        let dados = {
            login: this.email,
            senha: this.senha
         };
 
        
        await ajaxAsync("POST","login", dados, false)
        .then(function(r){
            return r.json();
        })
        .then(function(r){
            console.log(r);
            if (r.authenticated)
            {
                localStorage.setItem("accessToken", r.accessToken);
                retorno = true;
            }
        }).catch(function(){

        });

        return retorno;

    }

}