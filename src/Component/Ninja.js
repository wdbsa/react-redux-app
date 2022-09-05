import React, { Component } from "react";

class Ninja extends Component {

    render() {

        const { name, age, race } = this.props;

        return (
            <div>
                <p>Name: { name }</p>
                <p>Age: { age } </p>
                <p>Race: { race } </p>
            </div>
        );
    }   
} 

export default Ninja;