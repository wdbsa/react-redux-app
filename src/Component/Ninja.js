import React from "react";

const Ninja = ({ninjas}) => {

    const ninjaList =  ninjas.map((ninja) => {
       return  ninja.race === 'Dragon' ? (
        <div className="ninja" key={ninja.id}>
            <div>Name: { ninja.name }</div>
            <div>Race: { ninja.race }</div>
        </div>
       ) : null;    
    });

    return (
        <div className="ninjaList">
            { ninjaList }
        </div>
        
    );
    
} 

export default Ninja;