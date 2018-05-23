/**
 * CSS component for Menu.js (Navbar)
 */
import css from 'styled-jsx/css'

export const navStyles = css`
  .nav{
    display: flex;
    align-items: center;
    padding: 0 3.8rem;
    max-width: 100vw;
  }
  .nav__logo{
    max-height: 2rem;
    margin-right: auto;
  }
  .nav__item{
    display: inline-block;
    padding: 1.2rem 1.5rem;
    text-decoration: none;
    color: #0A1612;
  }
  .nav__item:hover{
    font-weight: 700;
    text-decoration: underline;
    color: #1A2930;
  }
`;