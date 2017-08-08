import React, { Component } from 'react';

class Projects extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="Projects">
      <div>
  My Projects
  {this.props.test}
  </div>
      </div>
    );
  }
}

export default Projects;
