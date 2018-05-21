/**
 * CSS component for LatestProjects.js
 */

import css from 'styled-jsx/css';

export const latestProjectsStyles = css`
.latest-projects{
  padding: 3.75rem 1rem;
  text-align: center;
}
.latest-projects__title h2{
  display: inline-block;
  position: relative;
  color: #1A2930;
  font-size: 3rem;
}
.latest-projects__title h2:after{
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background-color: #F7CE3E;
}
.latest-projects__projects{
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
}
.latest-projects__projects__project{
  margin: 0 0.5rem;
} 
`;