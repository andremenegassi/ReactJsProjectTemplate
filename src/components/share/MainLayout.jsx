import React  from "react";
import MainLayoutHeader from "./MainLayoutHeader";
import MainMenu from "./MainMenu";


export default class MainLayout extends React.Component
{
    constructor(props){

        super(props);

    }

    render(){
        let html = 
        <div>
            <MainLayoutHeader />
            <MainMenu />
            <div className="conteudo">
                {this.props.children}
            </div>
         </div>

        return html;
    }

}
