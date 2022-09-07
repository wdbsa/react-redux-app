import React, { Component } from 'react';

class AddPirate extends Component {

    state = {
        name: null,
        crew: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPirate(this.state)
    }


 render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" onChange={this.handleChange}  />
                <label htmlFor="crew">Crew</label>
                <input type="text" id="crew" placeholder="Crew" onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
 }
}

export default AddPirate;