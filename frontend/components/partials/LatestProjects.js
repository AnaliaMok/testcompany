import React, { Component } from 'react';
import Link from "next/link";
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
  
  getSlug(url) {
    const parts = url.split("/");
    return parts.length > 2 ? parts[parts.length - 2] : "";
  }
  
  renderProjects(projects) {
    if(projects === undefined || (projects !== undefined && projects.length === 0)){
      return;
    }
   
    // TODO: Wrap project in link to single-projects page
    const formattedProjects = projects.map((project, index) => {
      const projectLink = this.getSlug(project.link);
      return (
        <div key={index} className="latest-projects__projects__project">
          <div className="latest-projects__projects__project__image">
            {project.acf.project_featured_image != undefined ? 
              <img src={project.acf.project_featured_image.sizes.project_thumbnail} alt={project.acf.project_featured_image.alt} /> :
              <img src="http://via.placeholder.com/300x300" alt={project.acf.project_title}/>} 
          </div>
          <Link
            as={`/projects/${projectLink}`}
            href={`/project?slug=${projectLink}&apiRoute=projects`}
            key={project.ID}
          >
            <a className="latest-projects__projects__project__overlay">
              <h2>{project.acf.project_title}</h2>
            </a>
          </Link>
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
        {/* Absolutely hate this but have no choice */}
        <style jsx global>{latestProjectsStyles}</style>
      </React.Fragment>
    )
  }
}
