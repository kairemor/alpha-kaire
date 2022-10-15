import React from "react";

function Info({ info }) {
  return (
    <section className="info_section layout_padding2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="row">
              <div className="info_detail">
                <h5>Reseau Sociaux</h5>
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
          <div className="col-md-6 col-lg-6">
            <h5>Contact</h5>
            <div className="info_contact">
              <a href="">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>{info.location}</span>
              </a>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                {info.phones.map((number) => (
                  <>
                    <span>{number}</span> -
                  </>
                ))}
              </a>
              <a href="">
                <i className="fa fa-envelope"></i>
                <span>{info.email}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row info_form_social_row">
          <div className="col-md-4 col-lg-3"></div>
        </div>
      </div>
    </section>
  );
}

export default Info;
