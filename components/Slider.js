import React from "react";

function Slider({ slider }) {
  return (
    <section className="slider_section ">
      <div className="slider-container">
        <div className="custom_slick_slider">
          {slider.items.map((item) => (
            <div className="slick_slider_item ">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-lg-5">
                    <div className="detail_box">
                      <h1>
                        {item.title1} <br />
                        {item.title2}
                      </h1>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-7">
                    <div className="img-box">
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slick_slider_nav">
          {slider.items.map((item) => (
            <div className="slick_nav-item">
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slider;
