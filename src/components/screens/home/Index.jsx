import React from 'react';
import MainLayout from '../../share/MainLayout';
//import { connect } from 'react-redux';

export default class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            dados : []
        }
    }

    componentDidMount() {
        
      

        var config = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        };
 
        fetch("https://reqres.in/api/unknown", config)
        .then(function(r){
            return r.json();
        })
        .then(function(rJson){
            this.setState({
                dados : rJson.data
            });
          
        }.bind(this));
    
    }

    /*teste(){

        this.props.dispatch({
            type:"ADD",
            payload: 1
        });

        console.log(this.props);
    }*/

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
                {item.name}
                <br />
                <a onClick={this.adicionar.bind(this, item)}> + adicionar</a>
            </div>);
        })


        let html = 
            <div>
                <h1 className="titulo">Home Index</h1>
                {items}
                {/*<h1>{this.props.conta}</h1>

                <input type="button" value="ok" onClick={this.teste.bind(this)} />*/}
            </div>

        return <MainLayout>{html}</MainLayout>;
        
    }
}

/*
const mapStateToProps = (state) => {
    return {conta: state.conta}
 };

export default connect(mapStateToProps)(Index);*/

