import React, { Component } from 'react';
import { Config } from "../../config.js";
import styles, {partnersStyles} from "../../src/styles/components/css_partners";

// CTA for Partner Logos
export default class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      isLoaded: false,
      partners: []
    };
  }

  componentDidMount() {
    fetch(`${Config.apiUrl}/wp-json/wp/v2/partners?status=publish&order=asc`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            partners: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  renderPartners(partners) {
    if(partners === undefined || (partners !== undefined && partners.length === 0)){
      return;
    }
   
    const formattedPartners = partners.map((partner, index) => {
      return (
        <div key={index} className="partners__partner">
          <img src={partner.acf.partner_logo.sizes.large} alt={partner.acf.partner_logo.alt}/>
        </div>
      );
    });

    return formattedPartners;
  }

  render() {
    const { errors, isLoaded, partners } = this.state;
    return (
      <React.Fragment>
        <div className="partners">
          <div className="partners__title">
            <h2>Partners</h2>
          </div>
          <div className="partners__partner-list">
            {this.renderPartners(partners)}
          </div>
        </div>
        <style jsx global>{partnersStyles}</style>
      </React.Fragment>
    )
  }
}
