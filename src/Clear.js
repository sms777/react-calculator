import React, { Component } from 'react';


class Clear extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.persist();
  	this.props.clear(e);
  }

  render() {
    return (
      <div className="clear">
        <div onClick={this.handleClick} >Clear</div>
      </div>
    );
  }
}

export default Clear;
