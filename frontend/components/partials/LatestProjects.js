import React, { Component } from 'react';
import { Config } from "../../config.js";
import styles, {latestProjectsStyles} from "../../src/styles/components/css_latestprojects";

export default class LatestProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      isLoaded: false,
      latestProjects: []
    };
  }

  componentDidMount() {
    fetch(`${Config.apiUrl}/wp-json/wp/v2/projects?status=publish&per_page=4`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            latestProjects: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  renderProjects(projects) {
    if(projects === undefined || (projects !== undefined && projects.length === 0)){
      return;
    }
   
    // TODO: Wrap project in link to single-projects page
    const formattedProjects = projects.map((project, index) => {
      return (
        <div key={index} className="latest-projects__projects__project">
          <div className="latest-projects__projects__project__image">
            {project.acf.project_featured_image != undefined ? 
              <img src={project.acf.project_featured_image.sizes.project_thumbnail} alt={project.acf.project_featured_image.alt} /> :
               <img src="http://via.placeholder.com/300x300" alt={project.acf.project_title}/>} 
          </div>
        </div>
      );
    });

    return formattedProjects;
  }
  render() {
    const { errors, isLoaded, latestProjects } = this.state;
    
    return (
      <React.Fragment>
        <div className="latest-projects">
          <div className="latest-projects__title">
            <h2>Latest Projects</h2>
          </div>
          <div className="latest-projects__projects">
            {this.renderProjects(latestProjects)}
          </div>
        </div>
        <style jsx global>{latestProjectsStyles}</style>
      </React.Fragment>
    )
  }
}
