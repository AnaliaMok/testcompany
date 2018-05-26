import React, { Component } from 'react';
import { Config } from "../../config.js";
import styles, {testimonialsStyles} from "../../src/styles/components/css_testimonials";

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      isLoaded: false,
      testimonials: []
    };
  }

  componentDidMount() {
    fetch(`${Config.apiUrl}/wp-json/wp/v2/testimonials?status=publish&per_page=3&order=asc`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            testimonials: result
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

  renderTestimonials(testimonials) {
    if(testimonials === undefined || (testimonials !== undefined && testimonials.length === 0)){
      return;
    }
   
    const formattedTestimonials = testimonials.map((testimonial, index) => {
      return (
        <div key={index} className="testimonial">
          <div className="testimonial__headshot">
            <img src={testimonial.acf.client_headshot} alt={testimonial.acf.client_name}/>
          </div>
          <div className="testimonial__content">
            <p>{testimonial.acf.client_testimonial}</p>
            <span className="testimonial__content__client-name">-{testimonial.acf.client_name}{testimonial.acf.client_company !== "" ? ", from " + testimonial.acf.client_company : ""}</span>
          </div>
        </div>
      );
    });

    return formattedTestimonials;
  }

  render() {
    const { errors, isLoaded, testimonials } = this.state;
    return (
      <React.Fragment>
      <div className="testimonials">
        <div className="testimonials__title">
          <h2>Testimonials</h2>
        </div>
        <div className="testimonials__testimonials">
          {this.renderTestimonials(testimonials)}
        </div>
      </div>
      {/* Absolutely hate this but have no choice */}
      <style jsx global>{testimonialsStyles}</style>
      </React.Fragment>
    )
  }
}
