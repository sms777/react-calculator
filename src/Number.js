import React, { Component } from 'react';


class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	this.props.keyPress(e);
  }

  render() {
    return (
      <div className="number">
        <button onClick={this.handleClick} >{this.props.amount}</button>
      </div>
    );
  }
}

export default Number;
