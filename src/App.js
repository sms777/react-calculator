import React, { Component } from 'react';
import Digit from './Digit'
import Operator from './Operator'
import Equal from './Equal'
import Display from './Display'
import Clear from './Clear'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      input: '',
      toggleTotal: false,
    };
  }

  keyPress = (e) => {
    e.preventDefault();
    this.setState(previousState => ({input: (previousState.input + e.target.innerText)}))
  }

  computeTotal = () => {
    // change eval to something safer
    this.setState({total: eval(this.state.input), toggleTotal: true})
  }

  clear = () => {
    this.setState({total: '', input: '', toggleTotal: false})
  }

  render() {
    let numberKeysList = []
    for (var i=0; i < 10; i++) {
      numberKeysList.push(<Digit amount={i} keyPress={this.keyPress} />);
    }

    let operatorKeysList = []
    const symbols = ['*','/','+','-']
    for (var s of symbols) {
      operatorKeysList.push(<Operator symbol={s} keyPress={this.keyPress} />);
    }

    return (
      <div className="app">
        <Display toggle={this.state.toggleTotal} input={this.state.input} total={this.state.total}/>
        {numberKeysList}
        {operatorKeysList}
        <Equal compute={this.computeTotal} />
        <Clear clear={this.clear} />
      </div>
    );
  }
}

export default App;
