/**
 * CSS component for BlogPostCard.js
 */
import css from 'styled-jsx/css'

export const blogPostStyle = css`
.post{
  margin: 0 1rem;
  text-align: left;
  flex: 0 1 300px;
}
.post__img-container img{
  dislay: block;
}
.post__content h2{
  margin: 1rem 0;
}
.post__link{
  display: inline-block;
  margin-top: 1rem;
  color: #F7CE3E;
  font-weight: 600;
}  
`;