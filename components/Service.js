import React from "react";

function Service({ service }) {
  return (
    <section className="furniture_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
        <div className="row">
          {service.services.map((svc) => (
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src={svc.image} alt="" />
                </div>
                <div className="detail-box">
                  <h5>{svc.title}</h5>
                  <p>{svc.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Service;
