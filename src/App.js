import Ninja from './Component/Ninja';
import React, { Component } from "react";

class App extends Component {
  state = {
    ninjas: [
      { name: "Rimuru", race: "Slime", id: 1  },
      { name: "Benimaru", race: "Ogre", id: 2  },
      { name: "Noir", race: "Primodial Demon", id: 3  },
      { name: "Veldora", race: "Dragon", id: 4 }      
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React with Redux App</h1>
          <p>Welcome :??</p>
          <Ninja ninjas={ this.state.ninjas }  />
        </header>
      </div>
    );  
  }
}


export default App;
