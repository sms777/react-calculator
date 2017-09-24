import React, { Component } from 'react';


class Display extends Component {
  render() {
  	let toggle = this.props.toggle
  	let output = this.props.input
  	if (toggle) {
  		output = this.props.total
  	} else {
  		output = this.props.input
  	}
    return (
      <div className="display">
        {output}
      </div>
    );
  }
}

export default Display;
