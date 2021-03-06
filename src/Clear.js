import React, { Component } from 'react';


class Clear extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = (e) => {
  	e.persist();
  	this.props.clear(e);
  }

  render() {
    return (
      <div className="clear" onClick={this.handleClick} >Clear</div>
    );
  }
}

export default Clear;
