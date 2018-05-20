import React, { Component } from 'react';
import { Config } from "../../config.js";
import styles, {servicesStyles} from "../../src/styles/components/css_services";

export default class Services extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      isLoaded: false,
      services: []
    };
  }

  componentDidMount() {
    fetch(`${Config.apiUrl}/wp-json/wp/v2/services?status=publish&per_page=3&order=asc`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            services: result
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

  renderServices(services) {
    if(services === undefined || (services !== undefined && services.length === 0)){
      return;
    }
   
    const formattedServices = services.map((service, index) => {
      return (
        <li key={index} className="services__list__item">
          <h4>{service.acf.service_name}</h4>
          <div className="services__icon-container">
            {service.acf.service_icon_or_class === "class" ? 
              <i className={service.acf.service_class}></i> : 
              <img src={service.acf.service_icon} alt={service.acf.service_name} />
            }
          </div>
        </li>
      );
    });

    return formattedServices;
  }

  render() {
    const { errors, isLoaded, services } = this.state;

    return (
      <React.Fragment>
        <div className="services">
          <div className="services__title">
            <h2>Our Services</h2>
          </div>
          <div className="services__content">
            <ul className="services__list">
              {this.renderServices(services)}
            </ul>
          </div>
        </div>
        <style jsx global>{servicesStyles}</style>
      </React.Fragment>
    )
  }
}
