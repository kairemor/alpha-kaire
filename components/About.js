import React from "react";

function About({ about }) {
  return (
    <React.Fragment>
      <section className="about_section layout_padding">
        <div className="container about_container ">
          <div className="row">
            <div className="col-md-5 col-lg-4">
              <div className="img-box">
                <img src={about.image} alt="" />
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>{about.title}</h2>
                </div>
                <p>{about.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
