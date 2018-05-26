import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";
import style, { postStyle } from "../src/styles/components/css_post";

class Post extends Component {
  static async getInitialProps(context) {
    const { slug, apiRoute } = context.query;
    const res = await fetch(
        `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
    );
    const post = await res.json();
    const postMedia = await fetch(
        `${Config.apiUrl}/wp-json/wp/v2/media?include=${post.featured_media}`
    );
    
    const postMediaRes = await postMedia.json();
    const featuredMedia = await (postMediaRes !== null ? postMediaRes[0] : null);

    return { post, slug, featuredMedia };
  }

  render() {
    if (!this.props.post.title) return <Error statusCode={404} />;

    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
        <div className="post">
          <div className="post__header">
            {this.props.featuredMedia === null || this.props.featuredMedia === undefined ? 
              <img src="http://via.placeholder.com/300x200" alt={this.props.post.title}/> :
              <img src={this.props.featuredMedia.media_details.sizes.full.source_url} alt={this.props.featuredMedia.alt_text}/>
            }
            <h1>{this.props.post.title.rendered}</h1>
          </div>
          <div className="post__content" dangerouslySetInnerHTML={{__html: this.props.post.content.rendered}}></div>
        </div>
        <style jsx global>{postStyle}</style>
      </Layout>
    );
  }
}

export default PageWrapper(Post);
