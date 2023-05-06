import { Component } from "react";

class Subject extends Component{
    render(){
        return(
            <header>
                <h1><a href="/" onClick={function(event){
                    debugger;
                    event.preventDefault();
                    this.props.onChagePage();
                }.bind(this)}>{this.props.title}</a></h1>
            </header>
        );
    }
}

export default Subject;