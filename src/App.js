import React, { Component } from 'react';
import './App.css';
import Number from './Number'
import Display from './Display'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      input: '',
    };

    this.keyPress = this.keyPress.bind(this)
  }

  keyPress(e) {
    this.setState(previousState => ({input: (previousState + e.target.amount)}))
  }

  render() {
    let numberKeysList = []
    for (var i=0; i < 10; i++) {
      numberKeysList.push(<Number amount={i} keyPress={this.keyPress} />);
    }
    return (
      <div className="app">
        <Display input={this.state.input} total={this.state.total}/>
        {numberKeysList}
      </div>
    );
  }
}

export default App;
