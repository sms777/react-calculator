import React, { Component } from 'react';


class Equal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = (e) => {
  	e.persist();
  	this.props.compute(e);
  }

  render() {
    return (
      <div className="equal" onClick={this.handleClick} >=</div>
    );
  }
}

export default Equal;
