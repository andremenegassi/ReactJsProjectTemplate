import {ajaxAsync} from '../utils/Ajax'

export default class Produto {


    constructor(){

        this.id = 0;
        this.nome = "";
        this.preco = 0;
        this.qtde = 0
    }

    async obterTodos(){

        let produtos = [];

        await ajaxAsync("GET","produto", null, true)
        .then(function(r){
            return r.json();
        })
        .then(function(r){
            console.log(r);
            produtos = r;
        })
        .catch(function(){

        });

        return produtos;

    }

}