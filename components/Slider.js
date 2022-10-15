import React from "react";

function Slider({ slider }) {
  return (
    <section className="slider_section ">
      <div className="slider-container">
        <div className="custom_slick_slider">
          <div className="slick_slider_item ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  <div className="detail_box">
                    <h1>
                      Classic <br />
                      Furnitures
                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, red alteration in some form, by injected humou
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="img-box">
                    <img src="images/slider-img1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slick_slider_item ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  <div className="detail_box">
                    <h1>
                      Classic <br />
                      Furnitures
                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, red alteration in some form, by injected humou
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="img-box">
                    <img src="images/slider-img2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slick_slider_item ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  <div className="detail_box">
                    <h1>
                      Classic <br />
                      Furnitures
                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, red alteration in some form, by injected humou
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="img-box">
                    <img src="/images/slider-img3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slick_slider_nav">
          <div className="slick_nav-item">
            <img src="/images/slider-img1.png" alt="" />
          </div>
          <div className="slick_nav-item">
            <img src="/images/slider-img2.png" alt="" />
          </div>
          <div className="slick_nav-item">
            <img src="/images/slider-img3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
