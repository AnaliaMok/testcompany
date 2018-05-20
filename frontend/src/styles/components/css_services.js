/**
 * CSS component for Services.js 
 */
import css from 'styled-jsx/css'

export const servicesStyles = css`
  .services{
    padding: 3.75rem 1rem;
    text-align: center;
  }
  .services__title h2{
    display: inline-block;
    position: relative;
    color: #1A2930;
    font-size: 3rem;
  }
  .services__title h2:after{
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    background-color: #F7CE3E;
  }
  .services__content{
    margin: 2.5rem 0;
  }
  .services__list{
    list-style-type: none;
    display: flex;
    justify-content: center;
  }
  .services__list__item{
    flex: 0 1 20%;
    margin: 0 2rem;
    color: #0A1612;
  }
  .services__list__item h4{
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  .services__list__item i{
    display: inline-block;
    font-size: 3.125rem;
    color: #0A1612;
  }
  .services__icon-container{
    display: inline-block;
    padding: 1.2rem;
    background-color: #F7CE3E;
    border-radius: 50%;
    text-align: center;
  }
`;