import React from 'react';
import MainLayout from '../../share/MainLayout';
import { connect } from 'react-redux';
import ProdutoModel from '../../../models/Produto.model';

export default class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            dados : []
        }
    }

    async componentDidMount() {

       let p = new ProdutoModel();
      
        this.setState({
            dados :  await p.obterTodos()
        });
    

        /*
      
        var config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + localStorage.getItem("accessToken")
            }
        };
 
        fetch("http://localhost:60491/api/produto", config)
        .then(function(r){
            return r.json();
        })
        .then(function(rJson){
            this.setState({
                dados : rJson
            });
          
        }.bind(this));
        */
    }


    adicionar(item)
    {

        alert(item.name);
    }

    render(){


        let items = this.state.dados.map( item => {

            return(
            <div style={{backgroundColor:item.color}}>
                {item.id}
                <br />
                {item.nome}
                <br />
                R${item.preco}
            </div>);
        })


        let html = 
            <div>
                <h1 className="titulo">Home Index</h1>
                {items}
                <h1>{this.props.conta}</h1>

            </div>

        return <MainLayout>{html}</MainLayout>;
        
    }
}
