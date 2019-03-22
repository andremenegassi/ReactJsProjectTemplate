import React  from "react";

export default class MainLayout extends React.Component
{
    constructor(props){

        super(props);

        this.View = this.props.view;
    }

    render(){

        let html = 
            <div>
                {this.props.children}
            </div>

        return html;
    }

}