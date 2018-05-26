import React, { Component } from 'react';
import Link from "next/link";
import { Config } from "../../config.js";
import * as Helper from "../../Helper.js";
import BlogPostCard from "./BlogPostCard";
import styles, {latestBlogPostStyles} from "../../src/styles/components/css_latestblogposts";

class LatestBlogPosts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      isLoaded: false,
      latestPosts: []
    };
  }

  componentDidMount() {
    fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?status=publish&per_page=4`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            latestPosts: result
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

  renderBlogPosts(posts) {
    if(posts === undefined || (posts !== undefined && posts.length === 0)){
      return;
    }
    
    const formattedPosts = posts.map((post, index) => {
      return (
        <BlogPostCard key={post.title.rendered} post={post}/>
      );
    });

    return formattedPosts;
  }

  render() {
    const { errors, isLoaded, latestPosts } = this.state;
    return (
      <React.Fragment>
        <div className="latest-blog-posts">
          <div className="latest-blog-posts__title">
            <h2>Latest Blog Post</h2>
          </div>
          <div className="latest-blog-posts__posts">
            {this.renderBlogPosts(latestPosts)}
          </div>
        </div>
        <style jsx global>{latestBlogPostStyles}</style>
      </React.Fragment>
    )
  }
}

export default LatestBlogPosts;