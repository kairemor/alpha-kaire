import React from "react";

function Service() {
  return (
    <section className="furniture_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Our Furniture</h2>
          <p>
            which dont look even slightly believable. If you are going to use a
            passage of Lorem Ipsum, you need to be sure there isnt an
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img src="images/f1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>brown Chair Design</h5>
                <div className="price_box">
                  <h6 className="price_heading">
                    <span>$</span> 100.00
                  </h6>
                  <a href="">Buy Now</a>
                </div>
                <p>variations of passages of Lorem Ipsum avai</p>
                <a href="">
                  <span>Read More</span>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img src="images/f2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Gray Chair Design</h5>
                <div className="price_box">
                  <h6 className="price_heading">
                    <span>$</span> 200.00
                  </h6>
                  <a href="">Buy Now</a>
                </div>
                <p>variations of passages of Lorem Ipsum avai</p>
                <a href="">
                  <span>Read More</span>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img src="images/f3.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>House Chair Design</h5>
                <div className="price_box">
                  <h6 className="price_heading">
                    <span>$</span> 200.00
                  </h6>
                  <a href="">Buy Now</a>
                </div>
                <p>variations of passages of Lorem Ipsum avai</p>
                <a href="">
                  <span>Read More</span>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Service;
