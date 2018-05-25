import React, { Component } from 'react';
import Link from "next/link";
import { Config } from "../../config.js";
import * as Helper from "../../Helper.js";

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

  renderBlogPosts(posts) {
    if(posts === undefined || (posts !== undefined && posts.length === 0)){
      return;
    }
    
    const formattedPosts = posts.map((post, index) => {
      let postLink = Helper.getSlug(post.link);
      var media;

      const outputMedia = (data) => {
        media = data;
        return data;
      };

      Helper.getMediaItem(outputMedia, post.featured_media);
      //console.log(getMediaItem(featuredImage, post.featured_media));
      //console.log(featuredImage);

      return (
        <div key={index} className="latest-blog-posts__post">
          <div className="latest-blog-posts__post__img-container">
            {/* <img src={media.source_url} alt={media.alt === "" ? post.title.rendered : media.alt}/> */}
          </div>
          <div className="latest-blog-posts__post__conte">
            <h2>{post.title.rendered}</h2>
            <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
          </div>
        </div>
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
      </React.Fragment>
    )
  }
}

export default LatestBlogPosts;