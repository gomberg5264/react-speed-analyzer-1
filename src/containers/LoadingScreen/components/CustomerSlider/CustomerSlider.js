import React, { Component } from 'react'
import Slider from 'react-slick'
import Parser from 'html-react-parser'
import { Customers } from './Customers'

import './CustomSlider.css'

export default class CustomerSlider extends Component {
  componentDidMount(): void {
    this.interval = setInterval(() => this.slider.slickNext(), 4000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <Slider ref={slider => (this.slider = slider)} {...settings}>
        {Customers.map(function(customer) {
          return (
            <div key={customer.logo}>
              <img className="item-img" alt={`image ${customer.name}`} src={require(`../../../../assets/customers/${customer.logo}`)} />
              <p className="item-header">{customer.name} - {customer.title}</p>
              <p className="item-text">{Parser(customer.copy)}</p>
            </div>
          )
        })}
      </Slider>
    )
  }
}
