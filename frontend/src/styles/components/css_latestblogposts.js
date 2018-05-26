/**
 * CSS component for LatestBlogPosts.js
 */
import css from 'styled-jsx/css'

export const latestBlogPostStyles = css`
.latest-blog-posts{
  padding: 3.75rem 1rem;
  text-align: center;
}
.latest-blog-posts__title h2{
  display: inline-block;
  position: relative;
  color: #1A2930;
  font-size: 3rem;
}
.latest-blog-posts__title h2:after{
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background-color: #F7CE3E;
}
.latest-blog-posts__posts{
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
}
`;