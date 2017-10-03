import React, { Component } from 'react';


class Number extends Component {
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
      <div className="number">
        <div onClick={this.handleClick} >{this.props.amount}</div>
      </div>
    );
  }
}

export default Number;
