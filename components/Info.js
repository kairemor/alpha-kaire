import React from "react";

function Info() {
  return (
    <section className="info_section layout_padding2">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="row">
              <div className="col-md-6">
                <div className="info_detail">
                  <h5>Visit Our Shop</h5>
                  <p>
                    Randomised words which dont look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info_detail">
                  <h5>Customer Service</h5>
                  <p>
                    Randomised words which dot look even slightly believable. If
                    you are going to use a passage of Lorem Ipsum, you need to
                    be sure
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <h5>Contact Us</h5>
            <div className="info_contact">
              <a href="">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>Location</span>
              </a>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>+01 1234567890</span>
              </a>
              <a href="">
                <i className="fa fa-envelope"></i>
                <span>demo@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row info_form_social_row">
          <div className="col-md-8 col-lg-9">
            <div className="info_form">
              <h5>Sign up for our newsletter</h5>
              <form action="">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="social_box">
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
