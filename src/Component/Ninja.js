import React, { Component } from "react";

class Ninja extends Component {

    render() {

        const { ninjas } = this.props;
        const ninjaList =  ninjas.map((ninja) => {
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: { ninja.name }</div>
                    <div>Race: { ninja.race }</div>
                </div>
            )
        });

        return (
            <div className="ninjaList">
                 { ninjaList }
            </div>
        
        );
    }   
} 

export default Ninja;