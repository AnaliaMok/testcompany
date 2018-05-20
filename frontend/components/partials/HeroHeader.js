import React, { Component } from 'react';
import styles, {heroHeaderStyles} from '../../src/styles/components/css_heroheader';

// Targeted Component By ACF General Page Settings
const HeroHeader = ({settings}) => (
  <React.Fragment>
    <header className="hero-header" 
      style={settings.hero_image_or_solid_color === "hero_image" ? 
        {background : `#1A2930 url(${settings.header_background_image}) center/cover no-repeat`} 
        : {background: settings.header_overlay_color}}
    >
      {settings.hero_image_or_solid_color === "hero_image" ?
        <div className="hero-header__overlay" style={{backgroundColor: settings.header_overlay_color, opacity: 0.7}}></div> : ""
      }
      
      <div className="hero-header__content">
        <h2 className="hero-header__content__header">{settings.page_header_text}</h2>
        <h4 className="hero-header__content__subheader">{settings.page_subheader_text}</h4>
        <p className="hero-header__content__text">{settings.hero_main_text}</p>
      </div>
    </header>
    <style jsx global>{heroHeaderStyles}</style>
  </React.Fragment>
);

export default HeroHeader;