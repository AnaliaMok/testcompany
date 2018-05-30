/**
 * CSS component for BlogPostCard.js
 */
import css from 'styled-jsx/css'

export const blogPostStyle = css`
.post-card{
  margin: 0 1rem;
  text-align: left;
  flex: 0 1 300px;
}
.post-card__img-container img{
  dislay: block;
}
.post__content h2{
  margin: 1rem 0;
}
.post-card__link{
  display: inline-block;
  margin-top: 1rem;
  color: #1A2930;
  font-weight: 600;
}  
`;