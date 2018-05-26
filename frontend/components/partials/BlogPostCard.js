import React, { Component } from 'react';
import Link from "next/link";
import { Config } from "../../config.js";
import styles, {blogPostStyle} from "../../src/styles/components/css_blogpost";

class BlogPostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      isLoaded: false,
      post: this.props.post,
      featuredMedia: null
    };
  }

  componentDidMount() {
    // Retrieving featuredMedia
    let featuredMediaId = this.state.post.featured_media;
    
    if(featuredMediaId === 0) return;

    fetch(`${Config.apiUrl}/wp-json/wp/v2/media?include=${featuredMediaId}`)
    .then(res => res.json())
    .then(
      (data) => {
        // Set Alt Text
        let mediaObject = data[0].media_details.sizes.medium;
        mediaObject.alt = data[0].alt_text;
        this.setState({featuredMedia: mediaObject});
      },
      (err) => {
        console.error(err);
      }
    )
  }

  getSlug(url) {
    const parts = url.split("/");
    return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  render() {
    const { errors, isLoaded, post, featuredMedia } = this.state;
    let shortenedExcerpt = post.excerpt.rendered.length > 350 ? post.excerpt.rendered.substring(0, 350) + '...' : post.excerpt.rendered;
    let postLink = this.getSlug(post.link);
    return (
      <React.Fragment>
        <div className="post" key={post.title.rendered}>
          <div className="post__img-container">
            {featuredMedia === null ? <img src="http://via.placeholder.com/300x200" alt={post.title.rendered}/>:
            <img src={featuredMedia.source_url} alt={featuredMedia.alt === "" ? post.title.rendered : featuredMedia.alt}/>
            }
          </div>
          <div className="post__content">
            <h2>{post.title.rendered}</h2>
            <p dangerouslySetInnerHTML={{__html: shortenedExcerpt}}></p>
            <Link
            as={`/post/${postLink}`}
            href={`/post?slug=${postLink}&apiRoute=post`}
            key={post.ID}
          >
            <a className="post__link">Read More</a>
          </Link>
          </div>
        </div>
        {/* Absolutely hate this but have no choice */}
        <style>{blogPostStyle}</style>
      </React.Fragment>
    )
  }
}

export default BlogPostCard;