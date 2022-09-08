import Ninja from './Component/Pirates';
import React, { Component } from "react";
import AddPirate from './Component/AddPirate';

class App extends Component {
  state = {
    pirates: [
      { name: "Monkey D. Luffy", crew: "Straw Hat", id: 1  },
      { name: "Trafalgar D. Law", crew: "Heart Pirates", id: 2  },
      { name: "Buggy Clown", crew: "The Buggy Pirates", id: 3  },
      { name: "Shanks", crew: "Red-Hair Pirates", id: 4 }      
    ]
  }

  addPirate = (pirate) => {
   // console.log(pirate)
    pirate.id = Math.random();
    let pirateCopy = [...this.state.pirates, pirate];

    this.setState({
      pirates: pirateCopy
    }); 

   // console.log(this.state.pirates);
  }


  deletePirate = (id) => {
//console.log(id);

    let pirates = this.state.pirates.filter((pirate) => {
      return pirate.id !== id;
    });

    this.setState({
      pirates: pirates
    })


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React with Redux App</h1>
          <p>Welcome :??</p>
          <Ninja pirates={ this.state.pirates }  deletePirate={ this.deletePirate }/>
          <AddPirate addPirate={ this.addPirate }  />
        </header>
      </div>
    );  
  }
}


export default App;
