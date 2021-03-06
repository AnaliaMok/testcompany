import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import Menu from "./Menu.js";
import { Config } from "../config.js";
import stylesheet from '../src/styles/style.scss'

class Header extends Component {
  constructor() {
      super();
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" 
            integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Lato%7CTajawal" rel="stylesheet" />
          <title>
            Testing Company
          </title>
        </Head>
      </React.Fragment>
    );
  }
}

export default Header;

