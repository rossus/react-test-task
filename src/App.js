import React, { Component } from 'react';
import data from './data/data.json';
import {SortableTable} from './containers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SortableTable data={data} />
      </div>
    );
  }
}

export default App;
