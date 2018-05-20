/**
 * CSS component for HeroHeader.js 
 */
import css from 'styled-jsx/css'

export const heroHeaderStyles = css`
  .hero-header{
    height: 80vh;
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .hero-header__overlay{
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .hero-header__content{
    position: relative;
    display: inline-block;
    max-width: 40%;
    text-align: center;
    z-index: 2;
  }
  .hero-header__content__header{
    font-size: 3rem;
    font-weight: 700;
    color: #F7CE3E;
  }
  .hero-header__content__subheader{
    font-size: 2.4rem;
  }
  .hero-header__content__text{
    display: inline-block;
    font-size: 1.1rem;
    font-weight: 400;
    color: #EFEFEF;
  }
`;