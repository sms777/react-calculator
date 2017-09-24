import React, { Component } from 'react';


class Equal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.persist();
  	this.props.compute(e);
  }

  render() {
    return (
      <div className="equal">
        <button onClick={this.handleClick} >=</button>
      </div>
    );
  }
}

export default Equal;
