import React, { Component } from 'react';
import './App.css';
import Number from './Number'
import Operator from './Operator'
import Equal from './Equal'
import Display from './Display'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      input: '',
      toggleTotal: false,
    };

    this.keyPress = this.keyPress.bind(this)
    this.computeTotal = this.computeTotal.bind(this)
  }

  keyPress(e) {
    e.preventDefault();
    this.setState(previousState => ({input: (previousState.input + e.target.innerText)}))
  }

  computeTotal() {
    this.setState({total: eval(this.state.input), toggleTotal: true})
  }

  render() {
    let numberKeysList = []
    for (var i=0; i < 10; i++) {
      numberKeysList.push(<Number amount={i} keyPress={this.keyPress} />);
    }

    let operatorKeysList = []
    const symbols = ['x','/','+','-']
    for (var s of symbols) {
      operatorKeysList.push(<Operator symbol={s} keyPress={this.keyPress} />);
    }

    return (
      <div className="app">
        <Display toggle={this.state.toggleTotal} input={this.state.input} total={this.state.total}/>
        {numberKeysList}
        {operatorKeysList}
        <Equal compute={this.computeTotal} />
      </div>
    );
  }
}

export default App;
