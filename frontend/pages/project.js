import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import HeroHeader from "../components/partials/HeroHeader.js";
import Services from "../components/partials/Services.js";
import Testimonials from "../components/partials/Testimonials.js";
import LatestProjects from "../components/partials/LatestProjects.js";
import { Config } from "../config.js";
import styles, { projectStyles } from "../src/styles/components/css_project";

class Project extends Component{
  static async getInitialProps(context) {
    const { slug, apiRoute } = context.query;
    const res = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/projects?slug=${slug}`
    );
    const project = await res.json();
    return { project };
  }
  
  render() {
    let projectItem = this.props.project[0];
    let projectMeta = projectItem.acf;
    let projectImage = projectMeta.project_featured_image;
    
    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
        <main className="container project">
          <h1>{projectItem.title.rendered}</h1>
          <img src={projectImage.sizes.large} alt={projectImage.alt.length === 0 ? projectItem.title.rendered : projectItem.alt}/>
          <h2>{projectMeta.project_client_company}</h2>
          <div className="project__content" dangerouslySetInnerHTML={{__html: projectMeta.project_description}}></div>
        </main>
        <style jsx global>{ projectStyles }</style>
      </Layout>
    );
  }
}

export default PageWrapper(Project);