import React, { Component } from 'react';


class Display extends Component {
  render() {
    return (
      <div className="display">
        {this.props.input}
        {this.props.total}
      </div>
    );
  }
}

export default Display;
