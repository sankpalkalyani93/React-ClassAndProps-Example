import React, { Component } from "react";

class Greeting extends Component{
    render(){
        return (
            <div>
                <p>Welcome user, {this.props.name}</p>
                <p>You are {this.props.age} years old.</p>
            </div>
        );
    }
}

export default Greeting;