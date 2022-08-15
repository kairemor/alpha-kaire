import React from "react";

function About({ about }) {
  return (
    <React.Fragment>
      <section className="about_section layout_padding">
        <div className="container about_container ">
          <div className="row">
            <div className="col-md-5 col-lg-4">
              <div className="img-box">
                <img src="images/about-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Our furniture</h2>
                </div>
                <p>
                  which dont look even slightly believable. If you are going to
                  use a passage of Lorem Ipsum, you need to be sure there isnt
                  anything embarrassing hidden in the middle of text. All the
                  Lorem Ipsum{" "}
                </p>
                <a href="">
                  <span>Read More</span>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
