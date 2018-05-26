/**
 * CSS Component for single post
 */
import css from 'styled-jsx/css'

export const postStyle = css`
.post{
  width: 50%;
  margin: 0 auto;
  padding: 4rem 0;
  color: #0A1612;
}
.post h1,
.post h2,
.post h3,
.post h4,
.post h5,
.post h6{
  margin: 0.5rem 0 1.5rem;
  color: #1A2930;
}
.post h5, .post h6{
  font-size: 1rem;
  color: #F7CE3E;
}
.post hr{
  margin: 1.5rem 0;
  border-color: #1A2930;
}
.post ul, .post ul > li, .post ol, post ol > li{
  margin-left: 2rem;
}
.post a{
  color: #F7CE3E;
}
.post img{
  width: 100%;
}
.post__header h1{
  font-size: 3rem;
}
.post__header h1{
  display: inline-block;
  position: relative;
  color: #1A2930;
  font-size: 3rem;
}
.post__header h1:after{
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background-color: #F7CE3E;
}
.post__content p{
  margin: 0.5rem 0;
  font-size: 1.2rem;
}
.post__content li{
  font-size: 1.2rem;
}
`;