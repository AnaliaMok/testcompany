import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";
import styles, {navStyles} from '../src/styles/components/css_nav';

class Menu extends Component {
  constructor() {
    super();
  }

  getSlug(url) {
    const parts = url.split("/");
    return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  // Helper Method to direct to correct slug
  resolveItemObject(item){
    return "";
  }

  render() {
    const menuItems = this.props.menu.items.map((item, index) => {
      if (item.object === "custom") {
        return (
          <Link href={item.url} key={item.ID}>
            <a>{item.title}</a>
          </Link>
        );
      }else if(item.title === "Home"){
        return (
          <Link href="/" key={item.ID}>
            <a className="nav__item">Home</a>
          </Link>
        );
      }
      const slug = this.getSlug(item.url);
      const actualPage = item.object === "page" ? "post" : item.object;
      
      return (
        <Link
          as={`/${item.object}/${slug}`}
          href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
          key={item.ID}
        >
          <a className="nav__item">{item.title}</a>
        </Link>
      );
    });

    return(
      <React.Fragment>
        <nav className="nav">
          <Link href="/">
            <a className="nav__logo">
              <img src="/static/images/logo.svg" alt="TechCompany" className="nav__logo"/>
            </a>
          </Link>
          <div className="nav__items">
            {menuItems}
          </div>
        </nav>
        {/* Absolutely hate this but have no choice */}
        <style jsx global>{navStyles}</style>
      </React.Fragment>
    )
  }
}

export default Menu;
