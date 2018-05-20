/**
 * CSS component for Testimonials.js 
 */
import css from 'styled-jsx/css'

export const testimonialsStyles = css`
.testimonials{
  padding: 3.75rem 1rem;
  text-align: center;
  background-color: #1A2930;
}
.testimonials__title h2{
  display: inline-block;
  position: relative;
  color: #EFEFEF;
  font-size: 3rem;
}
.testimonials__title h2:after{
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background-color: #F7CE3E;
}
.testimonials__testimonials{
  display: flex;
  width: 80%;
  margin: 2.5rem auto;
}
.testimonial{
  display: flex;
  align-items: center;
  margin: 0 2rem;
}
.testimonial__headshot img{
  max-height: 200px;
}
.testimonial__content{
  position: relative;
  margin-left: 1rem;
  padding-left: 1rem;
  color: #EFEFEF;
  text-align: left;
}
.testimonial__content:after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 3px;
  background-color: #F7CE3E;
}
.testimonial__content__client-name{
  display: inline-block;
  margin-top: 1rem;
  font-style: italic;
  color: #F7CE3E;
}
`;