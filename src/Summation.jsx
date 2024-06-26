import React, { Component } from "react";

class Summation extends Component{

    render(){
        return(
            <div>
                <p>Summation result : {this.props.sum}</p>
            </div>
        );
    }
}

export default Summation;