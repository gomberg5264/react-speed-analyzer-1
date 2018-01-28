import React, { Component } from 'react'

import './SpeedKitBanner.css'

class SpeedKitBanner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="container ph2 pv6">
          <div className="flex items-center">
            <div className="w-50 text-right pa2">
              <h2 className="mv1">Try Baqend Speed Kit Today</h2>
              Make your websites load instantly
            </div>
            <div className="w-50 pa2 text-left">
              <a
                href="https://www.baqend.com/speedkit.html?_ga=2.235057797.527125052.1516095583-312811701.1516095583"
                className="btn btn-white ma1">
                 Learn More
              </a>
              <a
                href="https://dashboard.baqend.com/register?appType=speedkit&_ga=2.230289688.527125052.1516095583-312811701.1516095583"
                className="btn btn-orange ma1">
                Get Started for Free
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SpeedKitBanner