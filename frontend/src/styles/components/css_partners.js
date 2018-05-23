/**
 * CSS component for Partners.js
 */

import css from 'styled-jsx/css';

export const partnersStyles = css`
.partners{
  padding: 3rem 1rem;
  text-align: center;
  background-color: #1A2930;
}
.partners__title h2{
  display: inline-block;
  position: relative;
  color: #EFEFEF;
  font-size: 3rem;
}
.partners__title h2:after{
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background-color: #F7CE3E;
}
.partners__partner-list{
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
}
.partners__partner{
  margin: 0 2.5rem;
}
`;