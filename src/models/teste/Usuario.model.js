export default class Usuario {

    constructor(nome, email, senha) {

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

    validarUsuario() {

        return this.email === "a@a" && this.senha === "123";
    }

}