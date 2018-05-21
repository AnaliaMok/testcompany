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

class Index extends Component {
  static async getInitialProps(context) {
    // Retrieving Home Page
    const pageRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/pages?slug=home`
    );
    const page = await pageRes.json();
    return { page };
  }

  render() {
    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
        {/* <h1>{this.props.page.title.rendered}</h1> */}
        <HeroHeader settings={this.props.page[0].acf}/>
        <main>
            <Services />
            <Testimonials />
            <LatestProjects />
        </main>
      </Layout>
    );
  }
}

export default PageWrapper(Index);
