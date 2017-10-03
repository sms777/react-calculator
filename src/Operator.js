import React, { Component } from 'react';


class Operator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.persist();
  	this.props.keyPress(e);
  }

  render() {
    return (
      <div className="operator">
        <div onClick={this.handleClick} >{this.props.symbol}</div>
      </div>
    );
  }
}

export default Operator;
