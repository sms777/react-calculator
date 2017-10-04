import React, { Component } from 'react';


class Operator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = (e) => {
  	e.persist();
  	this.props.keyPress(e);
  }

  render() {
    return (
      <div className="operator" onClick={this.handleClick} >{this.props.symbol}</div>
    );
  }
}

export default Operator;
