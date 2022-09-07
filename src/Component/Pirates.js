import React from "react";

const Pirates = ({pirates}) => {

    const pirateList = pirates.map((pirate) => {
       return  pirate.race !== 'Dragon' ? (
        <div className="pirate" key={pirate.id}>
            <div>Name: { pirate.name }</div>
            <div>Crew: { pirate.crew }</div>
        </div>
       ) : null;    
    });

    return (
        <div className="pirateList">
            { pirateList }
        </div>
        
    );
    
} 

export default Pirates;