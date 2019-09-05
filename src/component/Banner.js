import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import slider_01 from "./img/slider-image1.jpg";
import slider_02 from "./img/slider-image2.jpg";
import slider_03 from "./img/slider-image3.jpg";
class Banner extends Component {
  state = {};
  render() {
    return (
      <div className="container home-container">
        <Carousel>
          <Carousel.Item className="carousel-img">
            <img className="d-block w-100" src={slider_01} alt="First slide" />
            <Carousel.Caption>
              <div className="col-md-6 col-sm-12 text-left">
                <h1>Base Fleet Dashboard</h1>
                <label className="banner-desc">
                  MBS driver movement dashboard, job assignment and acknowledge
                </label>
                <a href="#basefleet" className="section-btn">
                  Discover more
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-img">
            <img className="d-block w-100" src={slider_02} alt="Third slide" />
            <Carousel.Caption>
              <div className="col-md-6 col-sm-12 text-left">
                <h1>Adoc Dashboard</h1>
                <label className="banner-desc">
                  Monitor and Status tracking
                </label>
                <a href="#basefleet" className="section-btn">
                  Jump to Dashboard
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-img">
            <img className="d-block w-100" src={slider_03} alt="Third slide" />

            <Carousel.Caption>
              <div className="col-md-6 col-sm-12 text-left">
                <h1>Reports and Update</h1>
                <label className="banner-desc">
                  Drivers update the trip completion reports{" "}
                </label>
                <a href="#basefleet" className="section-btn">
                  Click for Reports
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Banner;
