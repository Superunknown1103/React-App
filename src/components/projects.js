import React, { Component } from 'react';
import ProjectItem from './projectItem';

class Projects extends Component {
  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        // console.log(project);
        return (
          <ProjectItem key={project.title} project={project} />
        );
      });
    }
    return (
      <div className="Projects">
      {projectItems}
      <div>
  My Projects
  {this.props.test}
  </div>
      </div>
    );
  }
}

export default Projects;
