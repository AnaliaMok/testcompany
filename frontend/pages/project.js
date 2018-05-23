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
    
    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
        <main>
          <h2>This is a single project: {projectItem.title.rendered}</h2>
        </main>
      </Layout>
    );
  }
}

export default PageWrapper(Project);