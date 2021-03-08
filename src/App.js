import React from 'react';

import './App.css';

import AnimalNames from './AnimalNames';

class App extends React.Component {

  state = {
    names: [
      'Frog', 'Rat', 'Ant', 'Rabbit', 'Whale','Shark','Cat', 'Bird', 'Dog', 'Cow', 'Fish',
    ],
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => !name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()))
  }

  render() {
    return (
      <div className='Div'>
        <h3> Search Bar </h3>
        <div className="inputContainer" >
        <i class="fas fa-search"></i>
        <input className="Field" type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} 
         placeholder='Search for an Animal! ' /> 
         </div>
        <br></br>
      <div style={{width:'300px', margin:'auto' }}>
        <h4 style={{ borderColor:'black', color:'black' }}>These are some important names:</h4>
      </div>
        <AnimalNames names={this.dynamicSearch()} />
      </div>
      
    );
  }
}

export default App;