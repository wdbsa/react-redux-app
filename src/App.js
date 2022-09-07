import Ninja from './Component/Pirates';
import React, { Component } from "react";
import AddNinja from './Component/AddPirate';

class App extends Component {
  state = {
    pirates: [
      { name: "Monkey D. Luffy", crew: "Straw Hat", id: 1  },
      { name: "Trafalgar D. Law", crew: "Heart Pirates", id: 2  },
      { name: "Buggy Clown", crew: "The Buggy Pirates", id: 3  },
      { name: "Shanks", crew: "Red-Hair Pirates", id: 4 }      
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React with Redux App</h1>
          <p>Welcome :??</p>
          <Ninja pirates={ this.state.pirates }  />
          <AddNinja />
        </header>
      </div>
    );  
  }
}


export default App;
