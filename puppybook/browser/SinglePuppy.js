import React, { Component } from 'react';


export default class SinglePuppy extends Component {

  render () {
    return (
      <div>
        <h2>{this.props.selectedPuppy.name}</h2>
        <div>
          <img src={this.props.selectedPuppy.image} />
        </div>
      </div>
    );
  }
}
