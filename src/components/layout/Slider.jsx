import React from "react";
import OwlCarousel from "react-owl-carousel";
class Slider extends React.Component {
  render() {
    return (
      <>
        <div id="slide" className="carousel slide" data-ride="carousel">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={0}
            items={1}
            autoplay
            autoplayTimeout={3000}
          >
            <div className="item">
              <img src="images/slide-1.png" alt="Vietpro Academy" />
            </div>
            <div className="item ">
              <img src="images/slide-2.png" alt="Vietpro Academy" />
            </div>
            <div className="item">
              <img src="images/slide-3.png" alt="Vietpro Academy" />
            </div>
            <div className="item">
              <img src="images/slide-4.png" alt="Vietpro Academy" />
            </div>
            <div className="item">
              <img src="images/slide-5.png" alt="Vietpro Academy" />
            </div>
            <div className="item">
              <img src="images/slide-6.png" alt="Vietpro Academy" />
            </div>
          </OwlCarousel>
        </div>
      </>
    );
  }
}

export default Slider;
