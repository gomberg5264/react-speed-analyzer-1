import React, { Component } from 'react'
import Slider from 'react-slick'
import parse from 'html-react-parser'
import { Customers } from './Customers'

import './CustomSlider.css'

export default class CustomerSlider extends Component {

  constructor(props) {
    super(props)
    this.state = {
      randomCustomers: []
    }
  }

  componentDidMount(): void {
    this.state.randomCustomers = this.randomCustomers()
    this.interval = setInterval(() => this.slider.slickNext(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  randomCustomers() {
    const min = 0;
    const max = Customers.length - 1
    var randomCustomers = []
    var counter = 0;
    while (randomCustomers.length !== 6) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
      if (!randomCustomers.find((customer) => customer.className === Customers[randomNumber].className)) {
        randomCustomers[counter] = Customers[randomNumber]
        counter++
      }
    }
    return randomCustomers
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      autoplay: false,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <Slider ref={slider => (this.slider = slider)} {...settings}>
        {this.state.randomCustomers.map(function(customer) {
          return (
            <div key={customer.name}>
              <div className="flex text-center justify-center">
                <div className={`item-img ${customer.className}`} />
              </div>
              <p className="item-header">{customer.name} - {customer.title}</p>
              <p className="item-text">{parse(customer.copy)}</p>
            </div>
          )
        })}
      </Slider>
    )
  }
}
