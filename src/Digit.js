import React, { Component } from 'react';


class Digit extends Component {
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
      <div className="number" onClick={this.handleClick} >{this.props.amount}</div>
    );
  }
}

export default Digit;
